import { useContext, useEffect, useState } from "react";
import notFoundImg from '../../assets/images/not- found.png';
import { AuthContext } from "../../provider/AuthProvider";


const BookedService = () => {
    const { user } = useContext(AuthContext) || {};
    const [bookedServices, setBookedServices] = useState([]);

    useEffect(() => {
        if (user?.email) {
            fetch(`${import.meta.env.VITE_API_URL}/booked/${user?.email}`)
                .then(response => response.json())
                .then(data => {
                    setBookedServices(data);
                });
        }
    }, [user?.email]);

    const formatDate = (isoDate) => {
        const date = new Date(isoDate);
        const options = { year: 'numeric', month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    };


    return (
        <div className="container mx-auto my-16 border rounded-md">
            <div className="text-center p-4">
                <h2 className="text-3xl font-bold ">Booked service</h2>
            </div>
            <div className="flex flex-col">
                {bookedServices.length === 0 ? (
                    <div className="text-center p-4">
                        <p className=" dark:text-white text-xl italic">No booked services found.</p>
                        <div className="items-center text-center justify-center">
                        <img className="w-60 md:ml-64 lg:ml-[640px] p-10" src={notFoundImg} alt="" />
                        </div>
                     
                    </div>
                ) : (
                    <div className="-m-1.5 overflow-x-auto">
                        <div className="p-1.5 min-w-full inline-block align-middle">
                            <div className="overflow-hidden">
                                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                                    <thead className="bg-purple-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">No</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">Service</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">Doctor Name</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">Email</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">Price</th>
                                            <th scope="col" className="px-6 py-3 text-start text-xs font-semibold text-white uppercase dark:text-neutral-500">Date</th>
                                            <th scope="col" className="px-6 py-3 text-end text-xs font-semibold text-white uppercase dark:text-neutral-500">status</th>
                                        </tr>
                                    </thead>
                                    {bookedServices.map((item, index) => (
                                        <tbody key={item._id} className="divide-y divide-gray-200 dark:divide-neutral-700">
                                            <tr>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {index + 1}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                                                    {item.serviceName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {item.providerName}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {item.providerEmail}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {item.price}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                                                    {formatDate(item.serviceDate)}
                                                </td>
                                                <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                                                    <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">{item.status}</button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    ))}
                                </table>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default BookedService;
