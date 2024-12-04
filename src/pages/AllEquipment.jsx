import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        fetch("http://localhost:4000/allEquipment")
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    return (
        <div className="container mx-auto px-5 md:px-10 my-12">

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

                                equipments?.map((equipment, idx) => <tr>
                                    <th>{idx+1}</th>
                                    <td>{equipment.itemName}</td>
                                    <td>{equipment.categoryName}</td>
                                    <td>${equipment.price}</td>
                                    <td>{equipment.stockStatus}</td>
                                    <td><Link to={`/equipmentDetails/${equipment._id}`} className="btn">View Details</Link></td>
                                </tr>)

                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllEquipment;