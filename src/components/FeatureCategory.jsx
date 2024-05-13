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
            <div className='text-center my-10'>
                <h4 className='text-purple-600 font-bold'>Feature</h4>
                <h2 className='text-2xl md:text-4xl font-bold'>Our All Services</h2>
            </div>
            <div className="lg:ml-12">
                {/* part-1 */}
                <div className='md:flex'>
                    <div className='w-72 h-72 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg1} alt="" />
                        <h4 className='text-2xl font-bold'>Cardiologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-gray-100 to-gray-none'>
                        <img className='w-20 ml-20' src={fcImg2} alt="" />
                        <h4 className='text-2xl font-bold'>Hematologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg3} alt="" />
                        <h4 className='text-2xl font-bold'>Immunology</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r border-b hover:border-2 hover:border-purple-700 text-center space-y-4 bg-gradient-to-b from-gray-100 to-gray-none'>
                        <img className='w-20 ml-20' src={fcImg4} alt="" />
                        <h4 className='text-2xl font-bold'>Gynecologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-b hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg5} alt="" />
                        <h4 className='text-2xl font-bold'>Neurologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                </div>

                {/* part 2 */}
                <div className='md:flex'>
                    <div className='w-72 h-72 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg6} alt="" />
                        <h4 className='text-2xl font-bold'>Orthopedics</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4 '>
                        <img className='w-20 ml-20' src={fcImg7} alt="" />
                        <h4 className='text-2xl font-bold'>Geneticist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg8} alt="" />
                        <h4 className='text-2xl font-bold'>Otolaryngologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6 border-r  hover:border-2 hover:border-purple-700 text-center space-y-4 '>
                        <img className='w-20 ml-20' src={fcImg9} alt="" />
                        <h4 className='text-2xl font-bold'>Epidemiology</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                    <div className='w-72 h-72 p-6  hover:border-2 hover:border-purple-700 text-center space-y-4'>
                        <img className='w-20 ml-20' src={fcImg10} alt="" />
                        <h4 className='text-2xl font-bold'>Radiologist</h4>
                        <span>
                            <IoArrowForwardCircle className="text-4xl text-purple-600 mx-auto mt-10" />
                        </span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FeatureCategory;