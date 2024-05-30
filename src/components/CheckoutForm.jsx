import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import PropTypes from 'prop-types'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { ImSpinner9 } from 'react-icons/im'
import useAuth from '../hooks/useAuth'
import useAxiosSecure from '../hooks/useAxiosSecure'
import './CheckoutForm.css'



const CheckoutForm = ({ closeModal, service }) => {
    const stripe = useStripe()
    const elements = useElements()
    const axiosSecure = useAxiosSecure()
    const { user } = useAuth()
    const [clientSecret, setClientSecret] = useState()
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        // fetch client secret
        if (service?.price && service?.price > 1) {
            getClientSecret({ price: service?.price })
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [service?.price])

    //   get clientSecret
    const getClientSecret = async price => {
        const { data } = await axiosSecure.post(`/create-payment-intent`, price)
        console.log('clientSecret from server--->', data)
        setClientSecret(data.clientSecret)
    }

    const handleSubmit = async event => {
        // Block native form submission.
        event.preventDefault()
        setProcessing(true)
        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return
        }

        // Get a reference to a mounted CardElement. Elements knows how
        // to find your CardElement because there can only ever be one of
        // each type of element.
        const card = elements.getElement(CardElement)

        if (card == null) {
            return
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log('[error]', error)
            setCardError(error.message)
            setProcessing(false)
            return
        } else {
            console.log('[PaymentMethod]', paymentMethod)
            setCardError('')
        }

        // confirm payment
        const { error: confirmError, paymentIntent } =
            await stripe.confirmCardPayment(clientSecret, {
                payment_method: {
                    card: card,
                    billing_details: {
                        email: user?.email,
                        name: user?.displayName,
                    },
                },
            })

        if (confirmError) {
            console.log(confirmError)
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            console.log(paymentIntent)
            toast.success('Payment successfully')

        }

        setProcessing(false)
    }

    return (
        <>
            {' '}
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />

                <div className='flex mt-2 justify-around'>
                    <button
                        disabled={!stripe || !clientSecret || processing}
                        type='submit'
                        className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                    >
                        {processing ? (
                            <ImSpinner9 className='animate-spin m-auto' size={24} />
                        ) : (
                            `Pay ${service?.price}`
                        )}
                    </button>
                    <button
                        onClick={closeModal}
                        type='button'
                        className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'
                    >
                        Cancel
                    </button>
                </div>
            </form>
            {cardError && <p className='text-red-600 ml-8'>{cardError}</p>}
        </>
    )
}

CheckoutForm.propTypes = {
    service: PropTypes.object,
    closeModal: PropTypes.func,
    refetch: PropTypes.func,
}

export default CheckoutForm