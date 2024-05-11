import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


const AllService = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const getData = async () => {
            try {
                const { data } = await axios(`${import.meta.env.VITE_API_URL}/services`);
                setServices(data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        getData();

    }, []);


    return (
        <div className="container mx-auto my-10">
            <div className="grid grid-cols-1 gap-10">
                {services.map(service => (
                    <section key={service._id} className="border-2 rounded-lg">
                        <div className="flex space-x-4 lg:space-x-16 p-3">
                            <div className="w-3/12 ">
                                <img className="rounded-xl w-full h-44" src={service.image} alt="" />
                            </div>
                            <div className="w-6/12 space-y-3 ">
                                <h4 className="text-xl font-bold">{service.serviceName}</h4>
                                <p> <span className="font-bold">Description:  </span>{service.description.substring(0, 100) + '......' }</p>
                                <p> <span className="font-bold">Price: </span>{service.price}</p>
                                <p> <span className="font-bold">Location: </span>{service.serviceArea}</p>
                            </div>
                            <div className="space-y-2 w-2/12">
                                <h4 className="font-bold">Consultation By..</h4>
                                <span> <img className="w-16 rounded-md" src={service.providerImage} alt="" /></span>
                                <p> <span className="font-bold">Name: </span> {service.providerName}</p>

                                <Link to={`/services/${service._id}`}  className="relative inline-flex items-center justify-start py-2 pl-4 pr-12 overflow-hidden font-semibold text-purple-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                                    <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-purple-600 group-hover:h-full"></span>
                                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                        <svg className="w-5 h-5 text-fuchsia-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                        <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                                    </span>
                                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Details</span>
                                </Link>

                            </div>
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default AllService;