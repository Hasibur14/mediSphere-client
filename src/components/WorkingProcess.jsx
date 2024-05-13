import { FaGetPocket, FaHandHoldingMedical, FaUserMd } from "react-icons/fa";
import { RiCalendarScheduleLine } from "react-icons/ri";

const WorkingProcess = () => {
    return (
        <div className="container mx-auto my-24">
            <div className="text-center space-y-4">
                <h2 className="text-2xl md:text-4xl font-bold">Our Working Process</h2>
                <p className="text-lg">Make sure to arrive at the doctors office on time for your appointment. If you need to cancel or reschedule, do so in <br /> advance through the portal or by contacting the office directly.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-20 mt-10 lg:h-48">

                <div className="border rounded-md px-8 py-8 bg-neutral-100 hover:bg-purple-500 hover:text-white transition duration-300 text-purple-500 ">
                    <span className='text-7xl'>
                        < FaHandHoldingMedical className="mx-auto mb-4" />
                    </span>
                    <h4 className="font-bold">Search Best Online Professional</h4>
                </div>

                <div className="border rounded-md px-8 py-8 bg-neutral-100 hover:bg-purple-500 hover:text-white transition duration-300 text-purple-500">
                    <span className='text-7xl'>
                        <FaUserMd className="mx-auto mb-4" />
                    </span>
                    <h4 className="font-bold">View Professional Doctor Profile</h4>
                </div>
                <div className="border rounded-md px-8 py-8 bg-neutral-100 hover:bg-purple-500 hover:text-white transition duration-300 text-purple-500">
                    <span className='text-7xl'>
                        <RiCalendarScheduleLine className="mx-auto mb-4" />
                    </span>
                    <h4 className="font-bold">Get Your Schedule Appointment</h4>
                </div>
                <div className="border rounded-md px-16 py-8 bg-neutral-100 hover:bg-purple-500 hover:text-white transition duration-300 text-purple-500">
                    <span className='text-7xl'>
                    <FaGetPocket className="mx-auto mb-4" />
                    </span>
                    <h4 className="font-bold">Get Instant Appointment</h4>
                </div>
            </div>
        </div>
    );
};

export default WorkingProcess;