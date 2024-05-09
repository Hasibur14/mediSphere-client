import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook, FaLinkedin } from "react-icons/fa6";
import title from '../assets/images/title.png';

const Footer = () => {
    return (
        <>
            <footer className="bg-black">
                <div className="  footer p-8 text-white">
                    <aside className="lg:space-y-3 ml-10 md:ml-10 lg:ml-44 ">
                        <div className="flex">
                            <img className="w-56 " src={title} alt="" />
                        </div>
                        <p className="text-md opacity-75 lg:w-[550px]">At Medisphere, we believe in putting the patient first. Our doctors take the time to listen to your concerns, answer your questions, and develop personalized treatment plans tailored to your unique needs and preferences. We are committed to providing compassionate care that is rooted in evidence-based medicine and delivered with integrity and empathy.</p>

                    </aside>

                    <div className="flex ml-12 space-x-10 lg:space-x-24">
                        <nav>
                            <header className="footer-title font-bold">Company</header>
                            <a className="link link-hover">About us</a><br />
                            <a className="link link-hover">Leadership</a><br />
                            <a className="link link-hover">Careers</a><br />
                            <a className="link link-hover">News & Article</a><br />
                            <a className="link link-hover">Doctors action</a><br />
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title  font-bold ">Support</header>
                            <a className="link link-hover">Help Center</a><br />
                            <a className="link link-hover">FAQ</a><br />
                            <a className="link link-hover">Ticket Support</a><br />
                            <a className="link link-hover">Contact Us</a>
                        </nav>
                        <nav className="lg:ml-20">
                            <header className="footer-title font-bold ">FOLLOW US</header>
                            <a className="link link-hover">Facebook</a><br />
                            <a className="link link-hover">LinkedIn</a>
                        </nav>
                    </div>

                </div>
                <div className='container mx-auto'>
                    <hr />
                </div>
                <div className="footer justify-between container mx-auto p-4 flex text-white">
                    <p className='text-white'>Copyright © 2024 - All right reserved by MediSphere</p>
                    <div className='flex space-x-2 text-xl'>
                        <span> <FaFacebook /></span>
                        <span><FaLinkedin /></span>
                        <span><FaTwitterSquare /></span>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
