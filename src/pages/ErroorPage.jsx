import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Heading from "../components/Heading";
import Navbar from "../components/Navbar";
import FooterImg from "../assets/WorldMap.svg"

const ErrorPage = () => {
    return (
        <div className="mx-auto">
            <Navbar></Navbar>
            <section className="container mx-auto px-5 md:px-10 my-20">
                <Link to="/">
                    <button className="btn">Go back go Home</button>
                </Link>

                <Heading
                    title={"This Page is not found"}
                    subtitle={"Thank You"}
                ></Heading>
            </section>

            <section
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

export default ErrorPage;