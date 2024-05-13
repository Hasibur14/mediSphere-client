import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import toast from "react-hot-toast";
import notFoundImg from '../../assets/images/not- found.png';
import { AuthContext } from "../../provider/AuthProvider";

const ServiceToDo = () => {
    const { user } = useContext(AuthContext);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getData();
    }, [user]);

    const getData = async () => {
        try {
            const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/bookRequest/${user?.email}`);
            setBooks(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    const handleStatusChange = async (id, status) => {
        try {
            const { data } = await axios.patch(`${import.meta.env.VITE_API_URL}/book/${id}`, { status });
            console.log(data);
            toast.success('Status updated successfully');
            getData();
        } catch (error) {
            console.error("Error updating status:", error);
            toast.error('Failed to update status');
        }
    };

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };

    return (
        <div>
            <Helmet>
                <title>ServiceToDo || MediSphere</title>
            </Helmet>
            <div className="container mx-auto my-24">
                {books.length === 0 ? (
                    <div className="text-center p-4">
                        <p className=" dark:text-white text-xl italic">No services To Do found.</p>
                        <div className="items-center text-center justify-center">
                            <img className="w-60 md:ml-64 lg:ml-[640px] p-10" src={notFoundImg} alt="" />
                        </div>

                    </div>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {books.map(item => (
                            <div key={item._id} className="max-w-2xl px-8 py-4 bg-white rounded-lg border dark:bg-gray-800">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-light text-gray-600 dark:text-gray-400">
                                        {formatDate(item.serviceDate)}
                                    </span>
                                    <a className="px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-300 transform bg-gray-600 rounded cursor-pointer hover:bg-gray-500" tabIndex="0" role="button">MediSphere</a>
                                </div>

                                <div className="mt-2">
                                    <a href="#" className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200 hover:underline" tabIndex="0" role="link">{item.serviceName}</a>
                                    <p className="mt-2 text-gray-600 dark:text-gray-300"> <span className="font-bold">Instructions: </span>  {item.instructions}</p>
                                </div>

                                <div className="flex justify-between">
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="dropdown">
                                            <div tabIndex={0} role="button" className="btn bg-fuchsia-500 text-white m-1">{item.status || 'Pending'}</div>
                                            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                                                <li>
                                                    <button
                                                        onClick={() => handleStatusChange(item._id, 'working')}
                                                        className='text-gray-500 transition-colors duration-200 hover:text-purple-500 focus:outline-none'
                                                    >
                                                        Working
                                                    </button>
                                                </li>
                                                <li>
                                                    <button
                                                        onClick={() => handleStatusChange(item._id, 'completed')}
                                                        className='text-gray-500 transition-colors duration-200 hover:text-purple-500 focus:outline-none'
                                                    >
                                                        Completed
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="items-center">
                                        <a className="font-semibold text-gray-700 cursor-pointer dark:text-gray-200" tabIndex="0" role="link">{item.userName}</a>
                                        <p className="font-semibold text-gray-700 cursor-pointer dark:text-gray-200">{item.userEmail}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default ServiceToDo;
