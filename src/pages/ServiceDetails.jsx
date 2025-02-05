import { Helmet } from "react-helmet";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Link, useLoaderData } from "react-router-dom";

const ServiceDetails = () => {

    const service = useLoaderData()
    const { _id, serviceName, serviceArea, image, price, description, providerEmail, providerImage, providerName } = service;

    return (
        <div className="container mx-auto my-16 p-4 md:p-0">
            <Helmet>
                <title>ServiceDetails || MediSphere</title>
            </Helmet>
            <section className="py-4 md:py-8 dark:bg-gray-100 dark:text-gray-900 shadow-md border rounded-md">
                <div className="grid  grid-cols-1 px-6 mx-auto lg:px-6 md:grid-cols-2 md:divide-x-2">
                    <div className=" py-6 md:py-10 md:px-6 lg:px-20 space-y-4"
                        data-aos="fade-right"
                        data-aos-offset="300"
                        data-aos-easing="ease-in-sine">
                        <h1 className="text-3xl md:text-4xl font-bold">Consultation By</h1>
                        <h4 className="text-2xl mt-6 font-semibold"><span className="font-bold">Name:  </span>{providerName}</h4>
                        <div className="space-y-4 text-xl">
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                                </svg>
                                <span>{serviceArea}</span>
                            </p>
                            <p className="flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                                </svg>
                                <span>{providerEmail}</span>
                            </p>
                            <div>
                                <img className="md:w-52 h-56 rounded-md border-2 border-purple-600 p-2  mb-8 md:mb-44" src={providerImage} alt="" />
                            </div>
                        </div>
                        <Link to='/' class="relative inline-flex items-center justify-start px-6 py-3 overflow-hidden font-medium transition-all bg-slate-50 rounded hover:bg-white group ">
                            <span className="w-48 h-48 rounded rotate-[-40deg] bg-purple-600 absolute bottom-0 left-0 -translate-x-full ease-out duration-500 transition-all translate-y-full mb-9 ml-9 group-hover:ml-0 group-hover:mb-32 group-hover:translate-x-0"></span>
                            <span className="relative flex w-full text-left text-black transition-colors duration-300 ease-in-out group-hover:text-white">
                            <span className="text-2xl mr-2 "><IoArrowBackCircleOutline /></span>
                            BACK HOME
                            </span>
                        </Link>
                    </div>
                    <section className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
                        data-aos="fade-left"
                        data-aos-anchor="#example-anchor"
                        data-aos-offset="500"
                        data-aos-duration="500">
                        <div>
                            <img className="w-full md:h-[400px] rounded-md" src={image} alt="image not found..." />
                        </div>
                        <div className="space-y-4 lg:ml-8 text-xl">
                            <div className=" space-y-3 ">
                                <h4 className="md:text-3xl font-bold">{serviceName}</h4>
                                <p> <span className="font-bold">Description:  </span>{description}</p>
                                <p> <span className="font-bold">Price: </span>{price}</p>
                                <p> <span className="font-bold">Location: </span>{service.serviceArea}</p>
                            </div>
                            <div>
                                <Link to={`/service/${_id}`} className="inline-flex overflow-hidden text-white bg-gray-700 rounded group">
                                    <span className="px-3.5 py-2 text-white bg-purple-500 group-hover:bg-fuchsia-500 flex items-center justify-center">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                                    </span>
                                    <span className="pl-4 pr-5 py-2.5">Book Now</span>
                                </Link>
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        </div>
    );
};

export default ServiceDetails;