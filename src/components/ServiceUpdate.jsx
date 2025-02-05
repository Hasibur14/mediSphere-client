import { Helmet } from 'react-helmet';
import toast from 'react-hot-toast';
import { useParams } from 'react-router-dom';
import bgImg2 from '../assets/images/bg2.png';

const ServiceUpdate = () => {

    const { id } = useParams()
    console.log('update id', id)

    const handleServiceUpdate = e => {
        e.preventDefault()
        const form = e.target;
        const serviceName = form.serviceName.value;
        const serviceArea = form.serviceArea.value;
        const image = form.image.value;
        const price = parseFloat(form.price.value)
        const description = form.description.value;

        const updateService = { serviceName, serviceArea, image, price, description };
        console.log(updateService);


        fetch(`${import.meta.env.VITE_API_URL}/serviceUpdate/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    toast.success('Update successfully');
                }
            })
    }


    return (
        <div className='relative md:h-[750px] my-10 p-4 md:p-0'>
             <Helmet>
                <title>ServiceUpdate || MediSphere</title>
            </Helmet>
            <div className='absolute w-full h-full'>
                <img src={bgImg2} alt="" className="w-full h-full object-cover" />
            </div>
            <div className='flex justify-center items-center relative '>
                <section className="container p-10 lg:p-20 mx-auto rounded-md shadow-md bg-opacity-40 bg-gray-400 mt-10">
                    <h2 className="text-3xl font-bold capitalize text-center bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-300% text-transparent bg-clip-text animate-gradient ">ADD SERVICE</h2>
                    <form onSubmit={handleServiceUpdate}>
                        <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                            <div>
                                <label className="text-purple-600 font-semibold ">Service Name</label>
                                <input id="serviceName" name='serviceName' type="text"
                                    placeholder='Service name' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-purple-600 font-semibold" >Service Area:</label>
                                <input id="serviceArea" name='serviceArea' type="text"
                                    placeholder='Service area' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-purple-600 font-semibold" >Image URL</label>
                                <input id="image" name='image' type="text" placeholder='image URL' className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>

                            <div>
                                <label className="text-purple-600 font-semibold" >Price</label>
                                <input id="price" name='price' type="text" placeholder='Price'
                                    className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" />
                            </div>
                        </div>
                        <div className='mt-5'>
                            <label className="text-purple-600 font-semibold" >Description</label>
                            <textarea id="bio" name='description' placeholder="description" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"></textarea>
                        </div>

                        <div className="flex justify-center mt-6">
                            <button className="btn px-14 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 rounded-md hover:bg- focus:outline-none focus:bg-gray-600">UPDATE</button>
                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default ServiceUpdate;