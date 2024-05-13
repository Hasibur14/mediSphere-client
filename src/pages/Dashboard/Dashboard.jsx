import { Helmet } from 'react-helmet';
import dashboardImg from '../../assets/images/dashboard-unscreen.gif';

const Dashboard = () => {
    return (
        <div>
             <Helmet>
                <title>Dashboard || MediSphere</title>
            </Helmet>
            <div className=' md:ml-[200px] lg:ml-[700px] mt-32 items-center justify-center z-20'>
                <img className='' src={dashboardImg} alt="" />
            </div>
        </div>
    );
};

export default Dashboard;
