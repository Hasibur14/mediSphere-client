import axios from "axios";
import { useEffect, useState } from "react";
import { MdLocationOn } from "react-icons/md";
import { TbDetailsOff } from "react-icons/tb";
import { Link } from "react-router-dom";


const PopularServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/popularServices`);
                setServices(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        getData();
    }, []);



    return (
        <div className="container mx-auto my-10">
            <div className="text-center justify-center my-10">
                <h2 className="md:text-5xl font-bold ">Popular Service</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-12 lg:gap-24 p-4 md:p-0">
                {
                    services.slice(0, 6).map(service => (
                        <div key={service._id} className="w-ful border shadow-lg rounded-xl p-6 dark:bg-[#1a2641d5]" data-aos="fade-up"
                            data-aos-anchor-placement="center-bottom">
                            <div className="flex flex-col">
                                <div className="relative h-62 w-full mb-3">
                                    <div className="absolute flex flex-col top-0 right-0 p-3">
                                        <button className="transition ease-in duration-300 bg-gray-800  hover:text-[#FF497C] shadow hover:shadow-md text-gray-500 rounded-full w-8 h-8 text-center p-1">
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-6 w-6"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className=" h-[220px] w-full rounded-2xl dark:bg-[#0F172A]">
                                        <img

                                            src={service.image}
                                            alt=""
                                            className=" w-full h-full object-fill rounded-xl"
                                        />
                                    </div>
                                </div>
                                <div className="flex-auto justify-evenly">
                                    <div className="flex flex-wrap ">
                                        <div className="w-full flex-none text-sm flex items-center text-gray-800 dark:text-gray-300 justify-between">
                                            <span className="mr-2 text-gray-600 dark:text-gray-300 font-extrabold text-xl hover:text-[#FF497C] ">
                                                {service.serviceName}
                                            </span>

                                            <div className="flex">
                                                <span className="h-4 w-4 text-red-500 text-lg mr-1 ">
                                                    <MdLocationOn />
                                                </span>
                                                <span className="text-gray-600 dark:text-gray-300 whitespace-nowrap mr-3">
                                                    {service.serviceArea}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center w-full">
                                            <h2 className="text-md mr-auto cursor-pointer text-gray-800 hover:text-[#FF497C] truncate  dark:text-white mt-5">
                                                <span className="font-bold">Description:  </span>
                                                {service.description.substring(0, 100) + '...'}
                                            </h2>
                                        </div>
                                    </div>
                                    <div className="flex justify-between mt-4">
                                        <h4><span className="font-bold">Doctor Name:   </span>
                                            {service.providerName}
                                        </h4>
                                        <span><img className="w-12 h-12 rounded-full" src={service.
                                            providerImage} alt="" /></span>
                                    </div>
                                    <div className="text-lg text-gray-500 font-semibold ">
                                        Price :${service.price}
                                    </div>

                                    <div className="flex space-x-2 text-sm font-medium justify-start mt-3">

                                        <Link to=''
                                            className="transition flex-1 ease-in duration-300 bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600  hover:bg-gray-800 border hover:border-gray-500  hover:text-white  hover:shadow-lg text-white rounded py-2 md:py-1 text-center  flex justify-center items-center px-4 font-medium text-sm">
                                            <span className=" mr-2">
                                                <TbDetailsOff />
                                            </span>
                                            <span>Details</span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default PopularServices; 