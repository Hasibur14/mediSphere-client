
import { Link } from 'react-router-dom';
import bgImg from '../../assets/images/bg.png';
import Carousel from './Carousel';

const Banner = () => {
    return (
        <div className='relative lg:h-[850px] border-t'>
            <img src={bgImg} alt="" className="absolute  w-full h-[850px] object-cover " />
            <div className='relative mt-16'>
                <div className="container mx-auto px-4 lg:px-0">
                    <div className="lg:flex items-center">
                        <div className='lg:w-1/2 mb-5 lg:mb-0 space-y-4' data-aos="fade-up" data-aos-duration="3000">
                            <div className="w-3/5">
                                <h1 className="text-2xl lg:text-5xl font-extrabold"><span className="bg-gradient-to-r from-purple-600 via-fuchsia-600 to-indigo-600 bg-300% text-transparent bg-clip-text animate-gradient">Your New Life Starts Here!</span></h1>
                            </div>
                            <p className="py-6 md:text-lg lg:w-4/5">Welcome to Medisphere Consultation Services! Our platform connects you with experienced and qualified doctors who are dedicated to providing personalized care and expert medical advice. Whether you are seeking guidance on a specific health concern, need a second opinion, or require ongoing management of a chronic condition, our team of healthcare professionals is here to support you every step of the way.</p>
                            <div>
                                <Link to='/allService' className="relative inline-block text-lg group">
                                    <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight transition-colors duration-300 ease-out  rounded-md text-white bg-purple-600">
                                        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-purple-600"></span>
                                        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 group-hover:-rotate-180 ease"></span>
                                        <span className="relative">GET START</span>
                                    </span>
                                    <span className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-fuchsia-500 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2"
                            data-aos="flip-down"
                            data-aos-duration="3000">
                            <Carousel></Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
