import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Home = () => {
    const {name} = useContext(AuthContext)
    return (
        <div>
            <h2 className="text-5xl">{name}</h2>
        </div>
    );
};

export default Home;