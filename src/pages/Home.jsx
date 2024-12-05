import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import { Link, NavLink, Outlet, useLoaderData } from "react-router-dom";
import Sports from "../components/Sports";
import NewsLetter from "../components/NewsLetter";

const Home = () => {
    const { user } = useContext(AuthContext)
    const allData = useLoaderData()
    const [allEquipment, setAllEquipment] = useState()
    useEffect(() => {
        const uniqueCategories = [...new Set(allData?.map(item => item.categoryName))];
        setAllEquipment(uniqueCategories)
    }, [])
    // console.log(allEquipment)
    return (
        <div>
            <Banner></Banner>
            <section>
                <Heading title={"Explore Our Collection"}
                    subtitle={"Top-Quality Sports Products to Elevate Your Game"}
                ></Heading>
                <div className="grid grid-cols-12 gap-5 container my-12 mx-auto px-5 md:px-10">
                    {/* category */}
                    <div className="col-span-3 flex flex-col border dark:bg-[#161718] p-5 rounded-3xl gap-3">
                        <NavLink to={`/category/allEquip`} className="w-full btn"><button>All Product</button></NavLink>
                        {
                            allEquipment?.map((data, idx) => <NavLink
                                state={data}
                                key={idx}
                                className="w-full btn"
                                to={`/category/${data}`}
                            ><button >
                                    {data}
                                </button></NavLink>)
                        }
                    </div>
                    {/* Products */}
                    <div className="col-span-9 ">
                        <Outlet></Outlet>
                    </div>

                </div>
            </section>
            <section className="container mx-auto px-5 md:px-10 my-12">
                <Sports></Sports>
                <NewsLetter></NewsLetter>
            </section>
        </div>
    );
};

export default Home;