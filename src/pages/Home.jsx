import { Helmet } from "react-helmet";
import Appointment from "../components/Appointment";
import FeatureCategory from "../components/FeatureCategory";
import Banner from "../components/Header/Banner";
import PatientsFeedback from "../components/PatientsFeedback";
import PopularServices from "../components/PopularServices";
import WorkingProcess from "../components/WorkingProcess";
import Contact from "../components/contact/Contact";

const Home = () => {
    return (
        <div className="mt-7">
            <Helmet>
                <title>Home || MediSphere</title>
            </Helmet>
           <div className="">
           <Banner></Banner>
            <FeatureCategory></FeatureCategory>
            <PopularServices></PopularServices>
            <Appointment></Appointment>
            <WorkingProcess></WorkingProcess>
            <PatientsFeedback></PatientsFeedback>
            <Contact></Contact>
           </div>
        </div>
    );
};

export default Home;