import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Footer from "../components/Footer";

const MainLayout = () => {
    const { loading } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="mx-auto">
            <nav className="">

                <Navbar></Navbar>
            </nav>
            <section className="min-h-[calc(100vh-292px)]">
                <Outlet></Outlet>
            </section>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;