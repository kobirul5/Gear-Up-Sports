import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, description, } = equipment
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure className="px-5 pt-5">
                <img
                    src={photoUrl}
                    alt={itemName}
                    className="rounded-xl w-full h-[150px] object-cover" />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title">{itemName}</h2>
                <div className="flex justify-between">
                    <p>Category: {categoryName}</p>
                    <p>price: {price}</p>
                </div>
                <p><span className="font-bold">Description</span> {description}</p>
                <div className="card-actions">
                    <Link to={`/equipmentDetails/${_id}`} className="btn btn-primary">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;