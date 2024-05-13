import Appointment from "../components/Appointment";
import Banner from "../components/Header/Banner";
import PatientsFeedback from "../components/PatientsFeedback";
import PopularServices from "../components/PopularServices";

const Home = () => {
    return (
        <div className="mt-7">
            <Banner></Banner>
            <PopularServices></PopularServices>
            <Appointment></Appointment>
            <PatientsFeedback></PatientsFeedback>
        </div>
    );
};

export default Home;