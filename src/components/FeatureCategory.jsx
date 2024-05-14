import { IoArrowForwardCircle } from "react-icons/io5";
import fcImg2 from '../assets/images/category/Hematologist.png';
import fcImg5 from '../assets/images/category/Neurologist.png';
import fcImg8 from '../assets/images/category/Otolaryngologist.png';
import fcImg1 from '../assets/images/category/cardiology.png';
import fcImg9 from '../assets/images/category/epidemiology.png';
import fcImg7 from '../assets/images/category/geneticist.png';
import fcImg3 from '../assets/images/category/immunology.png';
import fcImg4 from '../assets/images/category/microscope.png';
import fcImg6 from '../assets/images/category/orthopedics.png';
import fcImg10 from '../assets/images/category/radiologist.png';



const FeatureCategory = () => {
    return (
        <div className='container mx-auto my-20'>
            <div className='text-center my-10'
                data-aos="flip-up"
                data-aos-duration="2000">
                <h4 className='text-purple-600 font-bold' data-aos="flip-up"> FEATURE</h4>
                <h2 className='text-2xl md:text-4xl font-bold'>Our All Services</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-16 lg:ml-12 p-4 lg:p-0" >
                <div className='w-60 h-60 p-6 hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-fuchsia-200 to-gray-none shadow-md  hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-20 ml-16' src={fcImg1} alt="" />
                    <h4 className='text-2xl font-bold'>Cardiologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-6" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-blue-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg2} alt="" />
                    <h4 className='text-2xl font-bold'>Hematologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-fuchsia-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">

                    <img className='w-16 ml-16' src={fcImg3} alt="" />
                    <h4 className='text-2xl font-bold'>Immunology</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4  bg-gradient-to-b from-blue-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg4} alt="" />
                    <h4 className='text-2xl font-bold'>Gynecologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-b hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-fuchsia-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg5} alt="" />
                    <h4 className='text-2xl font-bold'>Neurologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>


                <div className='w-60 h-60 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-blue-200 to-gray-none shadow-md hover:scale-110 transition duration-300' data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg6} alt="" />
                    <h4 className='text-2xl font-bold'>Orthopedics</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-fuchsia-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg7} alt="" />
                    <h4 className='text-2xl font-bold'>Geneticist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-blue-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg8} alt="" />
                    <h4 className='text-2xl font-bold'>Otolaryngologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6 border-r  hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-fuchsia-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg9} alt="" />
                    <h4 className='text-2xl font-bold'>Epidemiology</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>
                <div className='w-60 h-60 p-6  hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-blue-200 to-gray-none shadow-md hover:scale-110 transition duration-300'
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-duration="3000">
                    <img className='w-16 ml-16' src={fcImg10} alt="" />
                    <h4 className='text-2xl font-bold'>Radiologist</h4>
                    <span>
                        <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                    </span>
                </div>

            </div>

        </div>
    );
};

export default FeatureCategory;