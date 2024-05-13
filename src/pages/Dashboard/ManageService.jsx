import { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { AiOutlineDelete } from "react-icons/ai";
import { MdOutlineBrowserUpdated } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';
import notFoundImg from '../../assets/images/not- found.png';
import title from '../../assets/images/title.png';
import { AuthContext } from "../../provider/AuthProvider";


const ManageService = () => {

    const { user } = useContext(AuthContext) || {};
    const [bookServices, setBookServices] = useState([])

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/serviceJob/${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    setBookServices(data)
                })
        }
    }, [user?.email]);


    //Delete service
    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`${import.meta.env.VITE_API_URL}/serviceDelete/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your service has been deleted.",
                                icon: "success"
                            })
                            const remaining = bookServices.filter(bookService => bookService._id !== _id)
                            setBookServices(remaining)
                        }
                    })
            }
        });
    };



    return (
        <div className="container mx-auto my-16">
            <Helmet>
                <title>ManageService || MediSphere</title>
            </Helmet>

            {bookServices.length === 0 ? (
                <div className="text-center p-4 ">
                    <p className=" dark:text-white text-xl italic ">Your are not any service added.! please service added then try its....!!</p>
                    <div className="items-center text-center justify-center">
                        <img className="w-60 md:ml-64 lg:ml-[640px] p-10" src={notFoundImg} alt="" />
                    </div>

                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 p-4 md:p-0">
                    {
                        bookServices.map(bookService => (
                            <div key={bookService._id} className=" w-full md:h-[590px] max-w-md overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800 border hover:scale-105 transition duration-300 hover:border-purple-600">
                                <img className="object-cover object-center w-full h-56" src={bookService.image} alt="image not found" />

                                <div className="flex justify-center bg-neutral-200 py-2">
                                    <img className="w-36" src={title} alt="" />
                                </div>

                                <div className="px-6 py-4 text-lg">
                                    <h1 className="text-xl font-semibold text-gray-800 dark:text-white">{bookService.serviceName}</h1>

                                    <p className="py-2 text-gray-700 dark:text-gray-400">{bookService.description.substring(0, 220) + '......'}</p>

                                    <div className="md:flex justify-between">
                                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                            <p> <span className="font-bold">Price:</span> $ {bookService.price}</p>
                                        </div>

                                        <div className="flex items-center mt-4 text-gray-700 dark:text-gray-200">
                                            <svg aria-label="location pin icon" className="w-6 h-6 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.063 10.063 6.27214 12.2721 6.27214C14.4813 6.27214 16.2721 8.063 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16757 11.1676 8.27214 12.2721 8.27214C13.3767 8.27214 14.2721 9.16757 14.2721 10.2721Z" /><path fillRule="evenodd" clipRule="evenodd" d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.3941 5.48178 3.79418C8.90918 0.194258 14.6059 0.0543983 18.2059 3.48179C21.8058 6.90919 21.9457 12.606 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.9732 6.93028 5.17326C9.59603 2.37332 14.0268 2.26454 16.8268 4.93029C19.6267 7.59604 19.7355 12.0269 17.0698 14.8268Z" />
                                            </svg>

                                            <h1 className="px-2 ">{bookService.serviceArea}</h1>
                                        </div>
                                    </div>
                                    <div
                                        className="flex justify-between mt-4 ">
                                        <Link to={`/serviceUpdate/${bookService._id}`}
                                            className='flex  text-white  px-6 py-2 rounded-md bg-sky-500'>
                                            <span className="text-2xl mr-2">
                                                <MdOutlineBrowserUpdated />
                                            </span>
                                            Update
                                        </Link>

                                        <button
                                            onClick={() => handleDelete(bookService._id)}
                                            className='flex bg-[#EA4744] text-white  px-6 py-2 rounded-md'>
                                            <span className="text-2xl mr-2">
                                                <AiOutlineDelete />
                                            </span>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            )}


        </div>
    );
};

export default ManageService;