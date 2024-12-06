import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])
    const location = useLocation()

    useEffect(() => {
        fetch("http://localhost:4000/allEquipment")
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    const handleSort = ()=>{
        const sortIEquipment = [...equipments].sort((a,b)=> a.price - b.price)
        setEquipments(sortIEquipment)
    } 
    return (
        <div className="container mx-auto px-5 md:px-10 my-12">
            <dir className="flex justify-end">
                <button onClick={handleSort} className="btn bg-[#ff851b77] border border-primary hover:bg-primary">Sort By Price</button>
            </dir>

            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            equipments> 0 ?
                                "No Data found"
                                :

                                equipments?.map((equipment, idx) => <tr key={idx}>
                                    <th>{idx+1}</th>
                                    <td>{equipment.itemName}</td>
                                    <td>{equipment.categoryName}</td>
                                    <td>${equipment.price}</td>
                                    <td>{equipment.stockStatus}</td>
                                    <td><Link 
                                    to={`/equipmentDetails/${equipment._id}`} className="btn bg-[#ff851b77] border border-primary hover:bg-primary"

                                    >View Details</Link></td>
                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;