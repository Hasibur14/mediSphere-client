import axios from 'axios';
import { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import bgImg from '../assets/images/bg2.png';
import { AuthContext } from '../provider/AuthProvider';


const BookServiceAdd = () => {

    const [startDate, setStartDate] = useState(new Date());
    const service = useLoaderData()
    const { _id, serviceName, image, price, providerEmail, providerName } = service;

    const { user } = useContext(AuthContext)
    console.log(user?.email)


    const handleServiceBook = async e => {
        e.preventDefault()
        const form = e.target;
        const serviceId = form.serviceId.value
        const serviceName = form.serviceName.value;
        const serviceImage = form.serviceImage.value;
        const providerEmail = form.providerEmail.value
        const providerName = form.providerName.value
        const price = parseFloat(form.price.value)
        const userEmail = user?.email
        const userName = user?.displayName
        const serviceDate = startDate.toISOString();
        const instructions = form.instructions.value
        const status = 'pending'

        const serviceBook = { serviceId, serviceName, serviceImage, price, userEmail, providerEmail, providerName, userName, serviceDate, instructions, status };

        try {
            const { data } = await axios.post(`${import.meta.env.VITE_API_URL}/serviceBook`, serviceBook);
            console.log(data)
            toast.success('Service Book successfully')
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    };

    return (
        <>
            <div className='relative md:h-[950px] my-10 p-4 md:p-0'>
                <div className='absolute w-full h-full'>
                    <img src={bgImg} alt="" className="w-full h-full object-cover" />
                </div>
                <div className='flex justify-center items-center relative '>
                    <section className="container p-10  mx-auto rounded-md shadow-md bg-opacity-40 bg-gray-600 mt-10">
                        <h2 className="text-3xl font-bold capitalize text-center bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-300% text-transparent bg-clip-text animate-gradient ">BOOK SERVICE </h2>
                        <form onSubmit={handleServiceBook}>
                            <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-purple-600 font-semibold ">Service Id</label>
                                    <input
                                        id="serviceId"
                                        name='serviceId'
                                        type="text"
                                        defaultValue={_id}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold ">Service Name</label>
                                    <input
                                        id="serviceName"
                                        name='serviceName'
                                        type="text"
                                        defaultValue={serviceName}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-purple-600 font-semibold" >Provider Name</label>
                                    <input
                                        id="providerName"
                                        name='serviceArea'
                                        type="text"
                                        defaultValue={providerName}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-purple-600 font-semibold" >Provider Email</label>
                                    <input
                                        id="providerEmail"
                                        name='providerEmail'
                                        type="email"
                                        defaultValue={providerEmail}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>

                                <div>
                                    <label className="text-purple-600 font-semibold" >Current User Name</label>
                                    <input
                                        id="currentUserName"
                                        name='currentUserName'
                                        type="text"
                                        placeholder='current user not found'
                                        defaultValue={user?.displayName}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold" >Current User Email</label>
                                    <input
                                        id="currentUserEmail"
                                        name='currentUserEmail'
                                        type="email"
                                        placeholder='current user not found'
                                        defaultValue={user?.email}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold" >Service Image</label>
                                    <input
                                        id="serviceImage"
                                        name='serviceImage'
                                        type="text"
                                        defaultValue={image}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold" >Date</label>
                                    <br />
                                    <DatePicker
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"
                                        selected={startDate}
                                        onChange={(date) => setStartDate(date)} />

                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold" >Special Instruction </label>
                                    <input
                                        id="instructions"
                                        name='instructions'
                                        type="text" placeholder='instructions'
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                                <div>
                                    <label className="text-purple-600 font-semibold" >Price</label>
                                    <input
                                        id="price"
                                        name='price'
                                        type="text"
                                        defaultValue={price}
                                        disabled
                                        className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                                </div>
                            </div>
                            <div className="flex justify-center mt-6">
                                <button className="btn px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 rounded-md hover:bg- focus:outline-none focus:bg-gray-600">Purchase</button>
                            </div>
                        </form>
                    </section>
                </div>
            </div>
        </>
    );
};

export default BookServiceAdd;