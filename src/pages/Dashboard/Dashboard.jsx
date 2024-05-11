import dashboardImg from '../../assets/images/dashboard-unscreen.gif';

const Dashboard = () => {
    return (
        <div className='relative  '>
            {/* <div className='absolute mt-10 ml-36  z-10'>
                <img className='w-full' src={bgImg} alt="" />
            </div> */}
            <div className='absolute lg:ml-[700px] lg:mt-32 items-center justify-center z-20'>
                <img className='' src={dashboardImg} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;
