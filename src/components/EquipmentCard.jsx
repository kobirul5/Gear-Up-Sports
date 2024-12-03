
const EquipmentCard = ({equipment}) => {
    const{itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, userEmail, userName, description, } = equipment
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img
                    src={photoUrl}
                    alt="Shoes"
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
                    <button className="btn btn-primary">View Details</button>
                </div>
            </div>
        </div>
    );
};

export default EquipmentCard;