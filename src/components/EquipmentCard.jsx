import { Link } from "react-router-dom";

const EquipmentCard = ({ equipment }) => {
    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, description, } = equipment
    return (
        <div className="card  shadow-xl border border-primary rounded-2xl">
            <figure className="px-5 pt-5">
                <img
                    src={photoUrl}
                    alt={itemName}
                    className="rounded-xl w-full h-[150px] object-cover" />
            </figure>
            <div className="card-body p-5">
                <h2 className="card-title">{itemName}</h2>
                    <p> <span className="font-bold">Category:</span> {categoryName}</p>
                    <p><span className="font-bold">Price:</span> {price}</p>
                <p><span className="font-bold">Description</span> {description}</p>
                <div className="card-actions">
                    <Link to={`/equipmentDetails/${_id}`} className="btn text-dark bg-[#ff92527e] hover:bg-btn-color border-btn-color hover:border-btn-color hover:text-secondary ">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;