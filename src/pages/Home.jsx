import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Outlet, useLoaderData } from "react-router-dom";

const Home = () => {
    const {user} = useContext(AuthContext)
    const allData = useLoaderData()
    const [allEquipment, setAllEquipment] = useState()
    return (
        <div>
            <Banner></Banner>
            <section>
                <Heading title={"Explore Our Collection"}
                subtitle={"Top-Quality Sports Products to Elevate Your Game"}
                ></Heading>
                <div className="grid grid-cols-12 gap-5 container mx-auto px-5 md:px-10">
                    {/* category */}
                    <div className="col-span-3">
                        <button className="btn">all Product</button>
                    </div>
                    {/* Products */}
                    <div className="col-span-9 ">
                        <Outlet></Outlet>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default Home;