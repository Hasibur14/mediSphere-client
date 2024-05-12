import Banner from "../components/Header/Banner";
import PopularServices from "../components/PopularServices";

const Home = () => {
    return (
        <div className="mt-7">
            <Banner></Banner>
            <PopularServices></PopularServices>
        </div>
    );
};

export default Home;