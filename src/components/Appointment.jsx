import { Link } from 'react-router-dom';
import img1 from '../assets/images/doctor-appo.png';
import './Appointment.css';

const Appointment = () => {
    return (
        <div>
            <section className='make-appointment p-4 md:p-0'>
                <div className="lg:mt-48 mx-5 ">
                    <div className="lg:flex justify-center container mx-auto">
                        <div className=' flex items-center lg:w-1/2 py-10 lg:py-36' data-aos="fade-up" data-aos-duration="3000">
                            <div className="">
                                <h3 className='text-purple-500 text-xl font-bold'>Appointment</h3>
                                <h1 className="text-2xl md:text-5xl font-bold my-5 text-white">Make an appointment Today</h1>
                                <p className="py-6 text-white"> If you have a specific doctor in mind, select their name from the list of available doctors. If not, the system may assign you to the first available physician.Some portals may require you to provide a brief description of the reason for your visit. This helps the doctor prepare for your appointment.</p>
                                <div>
                                <Link to='/allService' className="relative inline-block text-lg group">
                                   <button className='px-4 py-2 rounded-md text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 '>
                                    GET START
                                   </button>
                               </Link>
                                </div>
                            </div>
                        </div>
                        <div className="w-4/6 hidden lg:block" data-aos="fade-up" data-aos-duration="3000">
                            <img src={img1} alt='' className="-mt-40 h-[800px]" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Appointment;