import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";

const Home = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            <Banner></Banner>
        </div>
    );
};

export default Home;