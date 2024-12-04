import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyEquipCard = ({ myEquipment }) => {
    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description,
    } = myEquipment


    const handleADeleteEquipment = (id) => {
        console.log(id)
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
                fetch(`http://localhost:4000/allEquipment/${_id}`, {
                    method:"DELETE"
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={photoUrl}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div className="flex justify-between gap-10">
                    <div>
                        <h1 className="md:text-5xl text-3xl font-bold">{itemName}</h1>
                        <p className="py-3"><span className="font-semibold">Description: </span>{description}</p>
                        <p className=""><span className="font-semibold">Price: </span>$ {price}</p>

                    </div>
                    <div className="flex flex-col justify-center gap-4 text-2xl">
                        <Link to={`/equipmentDetails/${_id}`}>
                            <FaEye></FaEye>
                        </Link>
                        <FaEdit></FaEdit>
                        <button onClick={() => handleADeleteEquipment(_id)}>
                            <FaTrash></FaTrash>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipCard;