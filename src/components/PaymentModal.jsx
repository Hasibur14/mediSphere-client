import {
    Dialog,
    DialogPanel,
    DialogTitle,
    Transition,
    TransitionChild,
} from '@headlessui/react'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'
import PropTypes from 'prop-types'
import { Fragment } from 'react'
import CheckoutForm from './CheckoutForm'

const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PUBLISHABLE_KEY)

const PaymentModal = ({ isOpen, closeModal, service }) => {

    if (!service) return null;

    const { serviceName, providerName, providerEmail, serviceDate, price } = service;

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <TransitionChild
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </TransitionChild>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center'>
                        <TransitionChild
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <DialogPanel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <DialogTitle
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Payment for {serviceName}
                                </DialogTitle>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Provider Name: {providerName}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Provider Email: {providerEmail}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Date: {serviceDate} {/* Assuming serviceDate is a valid date */}
                                    </p>
                                </div>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500'>
                                        Price: ${price}
                                    </p>
                                </div>
                                <hr className='mt-8 ' />
                                {/* Checkout form */}
                                <Elements stripe={stripePromise}>
                                    <CheckoutForm closeModal={closeModal} service={service} />
                                </Elements>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}

PaymentModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    closeModal: PropTypes.func.isRequired,
    service: PropTypes.object,
}

export default PaymentModal;
