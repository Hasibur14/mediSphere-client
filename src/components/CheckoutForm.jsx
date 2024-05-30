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
    const [clientSecret, setClientSecret] = useState('')
    const [cardError, setCardError] = useState('')
    const [processing, setProcessing] = useState(false)

    useEffect(() => {
        if (service?.price && service?.price > 0) {
            getClientSecret(service?.price)
        }
    }, [service?.price])

    const getClientSecret = async price => {
        try {
            const { data } = await axiosSecure.post(`/create-payment-intent`, { price })
            setClientSecret(data.clientSecret)
        } catch (error) {
            console.error('Error fetching client secret:', error)
        }
    }

    const handleSubmit = async event => {
        event.preventDefault()
        if (!stripe || !elements) return
        if (!clientSecret) {
            setCardError('Client secret not set.')
            return
        }

        setProcessing(true)
        const card = elements.getElement(CardElement)
        if (card == null) return

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            setCardError(error.message)
            setProcessing(false)
            return
        }

        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email,
                    name: user?.displayName,
                },
            },
        })

        if (confirmError) {
            setCardError(confirmError.message)
            setProcessing(false)
            return
        }

        if (paymentIntent.status === 'succeeded') {
            toast.success('Payment successful')
        }

        setProcessing(false)
    }

    return (
        <>
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
    service: PropTypes.object.isRequired,
    closeModal: PropTypes.func.isRequired,
}

export default CheckoutForm
