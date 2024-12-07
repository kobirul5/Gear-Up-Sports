import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState([])

    useEffect(() => {
        fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment")
            .then(res => res.json())
            .then(data => setEquipments(data))
    }, [])
    const handleSort = ()=>{
        const sortIEquipment = [...equipments].sort((a,b)=> a.price - b.price)
        setEquipments(sortIEquipment)
    } 
    return (
        <div className="container mx-auto px-5 md:px-10 my-12">
            <div className="flex justify-end">
                <button onClick={handleSort} className="btn bg-[#ff851b77] border border-primary hover:bg-primary mb-2">Sort By Price</button>
            </div>

            <div className="overflow-x-auto rounded-md">
                <table className="table border rounded-md">
                    {/* head */}
                    <thead className="bg-[#ff851b77] text-dark rounded-md">
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Category</th>
                            <th>Price</th>
                            <th>Stock</th>
                            <th>action</th>
                        </tr>
                    </thead>
                    <tbody className="border">
                        {/* row 1 */}
                        {
                            equipments=== 0 ?
                                "No Data found"
                                :

                                equipments?.map((equipment, idx) => <tr key={idx}>
                                    <th>{idx+1}</th>
                                    <td>{equipment.itemName}</td>
                                    <td>{equipment.categoryName}</td>
                                    <td>${equipment.price}</td>
                                    <td>{equipment.stockStatus}</td>
                                    <td><Link 
                                    to={`/equipmentDetails/${equipment?._id}`} className="btn bg-[#ff851b77] border border-primary hover:bg-primary"

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