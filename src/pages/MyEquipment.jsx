import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import MyEquipCard from "../components/MyEquipCard";

const MyEquipment = () => {
    const allData = useLoaderData()
    const { user } = useContext(AuthContext)
    const [myData, setMyData] = useState([])

    useEffect(() => {
        const filterMyData = allData?.filter(data => data?.userEmail === user?.email)
        setMyData(filterMyData)
    }, [])


    return (
        <div className="container mx-auto px-5 md:px10 my-10">
            <div className="flex flex-col justify-center items-center gap-4">
                <h1 className="text-3xl md:5xl font-bold">My Equipment List</h1>
                <Link to="/addEquipment" className="btn rounded-3xl">Add More Equipment</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {
                    myData?.map((myEquipment, idx) => <MyEquipCard
                        key={idx}
                        myEquipment={myEquipment}
                        setMyData={setMyData}
                        myData={myData}
                    ></MyEquipCard>)
                }
            </div>


        </div>
    );
};

export default MyEquipment;