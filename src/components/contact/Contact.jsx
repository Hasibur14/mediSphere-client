
import './contact.css';

const Contact = () => {
    return (
        <section>
            <div className='text-center contact mb-24 p-4'>
                <fieldset className='border container mx-auto py-20 lg:max-w-2xl'>
                    <legend className='text-fuchsia-500 text-xl font-bold'>Contact Us</legend>
                    <h1 className="text-3xl text-white mb-8">Stay connected with us</h1>
                    <input type="email"
                        placeholder="Email address"
                        className="input w-full max-w-xs mb-5"
                        data-aos="fade-up"
                        data-aos-duration="1500" />
                    <br />
                    <input type="text"
                        placeholder="Subject"
                        className="input  w-full max-w-xs mb-5"
                        data-aos="fade-up"
                        data-aos-duration="2000" />
                    <br />
                    <textarea className="textarea  w-full max-w-xs h-[130px] mb-5"
                        placeholder="Your message"
                        data-aos="fade-up"
                        data-aos-duration="2500">
                    </textarea>
                    <br />
                    <button className=' py-2 w-full max-w-xs rounded-sm text-white bg-gradient-to-r from-purple-500 to-fuchsia-600 border-purple-600 '
                        data-aos="fade-up"
                        data-aos-duration="2500">
                        SUBMIT
                    </button>
                </fieldset>
            </div>
        </section>
    );
};

export default Contact;