import { Link } from "react-router-dom";

const EquipmentCard = ({equipment}) => {
    const{_id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl,description, } = equipment
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photoUrl}
                    alt={itemName}
                    className="rounded-xl" />
            </figure>
            <div className="card-body">
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