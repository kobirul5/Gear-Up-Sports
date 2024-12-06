import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Footer from "../components/Footer";
import FooterImg from "../assets/WorldMap.svg"

const MainLayout = () => {
    const { loading, theme } = useContext(AuthContext)

    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className={`mx-auto ${theme === "light" ? "text-dark" : "text-secondary"}`}>
            <nav className="">

                <Navbar></Navbar>
            </nav>
            <section className="min-h-[calc(100vh-292px)]">
                <Outlet></Outlet>
            </section>
            <section
            style={{
                backgroundImage: `url(${FooterImg})`,
            }}
            >

                <Footer></Footer>
            </section>
        </div>
    );
};

export default MainLayout;