import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import FooterImg from "../assets/WorldMap.svg"

const AuthPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <section
            className="mt-10"
                style={{
                    backgroundImage: `url(${FooterImg})`,
                }}
            >

                <Footer></Footer>
                <p className="text-center text-primary pb-5">&copy; 2024 GearUp Sports. All rights reserved.</p>

            </section>
        </div>
    );
};

export default AuthPage;