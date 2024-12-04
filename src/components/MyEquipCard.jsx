import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";

const MyEquipCard = ({ myEquipment }) => {

    const { itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description,
    } = myEquipment
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
                        <FaEye></FaEye>
                        <FaEdit></FaEdit>
                        <FaTrash></FaTrash>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyEquipCard;