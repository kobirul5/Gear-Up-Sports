import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipCard = ({ myEquipment, myData, setMyData }) => {
    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description,
    } = myEquipment


    const handleADeleteEquipment = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://assignment-10-server-beta-self.vercel.app/allEquipment/${_id}`, {
                    method: "DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your Equipment has been deleted.",
                                icon: "success"
                            });
                        }
                        const remainingEquip = myData?.filter(data => data?._id !== _id)
                        setMyData(remainingEquip)
                    })
            }
        });
    }

    return (
        <div className="hero border">
            <div className="hero-content flex-col xl:flex-row">
                <div className="w-full md:w-[300px]">
                    <img
                        src={photoUrl}
                        className="max-w-sm h-[250px]  xl:h-[200px] w-full xl:w-[250px] object-cover rounded-lg shadow-2xl" />
                </div>
                <div className="flex justify-between gap-10">
                    <div>
                        <h1 className="text-2xl md:text-3xl  font-bold">{itemName}</h1>
                        <p className="py-3"><span className="font-semibold">Description: </span>{description}</p>
                        <p className=""><span className="font-semibold">Price: </span>$ {price}</p>

                    </div>
                    <div className="flex flex-col justify-center gap-4 text-2xl text-primary">
                        <Link to={`/equipmentDetails/${_id}`}>
                            <FaEye></FaEye>
                        </Link>
                        <Link to={`/updateEquipment/${_id}`}>
                            <FaEdit></FaEdit>
                        </Link>
                        <button 
                        className="text-red-600"
                        onClick={() => handleADeleteEquipment(_id)} >
                            <FaTrash></FaTrash>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipCard;