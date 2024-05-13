import { BiSolidQuoteLeft } from "react-icons/bi";

const PatientsFeedback = () => {
    return (
        <section className='container mx-auto my-20'>
            <div className="flex justify-between items-center mx-5">
                <div data-aos="fade-right" data-aos-duration="3000">
                    <h3 className='text-purple-500 text-xl font-bold'>Testimonial</h3>
                    <h1 className="text-2xl md:text-4xl font-bold opacity-75 ">What Our Patients Says</h1>
                </div>
                <div >
                <BiSolidQuoteLeft className="lg:text-[200px] text-purple-400 opacity-20"/>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 md:m-0 lg:m-0  ">
                <div className="shadow-lg p-10 rounded-lg hover:border hover:border-purple-600" data-aos="fade-right" data-aos-duration="3000">
                    <p>Users value websites that offer educational resources on health topics. They might say the website provides valuable information that helps them understand their health conditions and treatment options better.</p>
                    <div className="flex items-center mt-8">
                        <img src='https://i.ibb.co/rMLzzPt/client-1.jpg' alt="" className='mr-5  border-2 border-fuchsia-600 rounded-full w-20 h-20' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Tanvir Ahmmed</h3>
                            <h5 className='text-lg'>Sydney, Australia</h5>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg p-10 rounded-lg hover:border hover:border-purple-600" data-aos="fade-up" data-aos-duration="3000">
                    <p>Patients appreciate when billing and insurance information is easy to find and understand. They might say the website provides clear explanations of billing processes and accepted insurance plans.</p>
                    <div className="flex items-center mt-8">
                        <img src='https://i.ibb.co/yND4MrL/client-3.jpg' alt="" className='mr-5 border-2 border-fuchsia-600 rounded-full w-20 h-20' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Nirob Hossen</h3>
                            <h5 className='text-lg'>Mirpur, Dhaka</h5>
                        </div>
                    </div>
                </div>
                <div className="shadow-lg p-10 rounded-lg hover:border hover:border-purple-600" data-aos="fade-left" data-aos-duration="3000">
                    <p>Users appreciate when they can easily schedule appointments online without any hassle. They might describe their experience as seamless and efficient, allowing them to book appointments with just a few clicks.
                    </p>
                    <div className="flex items-center mt-8">
                        <img src='https://i.ibb.co/cDnnv1G/client-2.jpg' alt="" className='mr-5 border-2 border-fuchsia-600 rounded-full w-20 h-20' />
                        <div className="">
                            <h3 className='text-xl font-bold'>Meher Mahbub</h3>
                            <h5 className='text-lg'>Dhaka, Bangladesh</h5>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PatientsFeedback;