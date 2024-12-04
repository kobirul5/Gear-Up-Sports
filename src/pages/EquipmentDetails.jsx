import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import Loading from "../components/Loading";
import Rating from "react-rating";
import { FaStar } from "react-icons/fa";

const EquipmentDetails = () => {
    const { loading } = useContext(AuthContext)
    const equipmentData = useLoaderData()
    const { _id, itemName, categoryName, price, rating, customization, processingTime, stockStatus, photoUrl, description, } = equipmentData

    if (loading) {
        return <Loading></Loading>
    }
    return (
        <div className="hero bg-base-200 my-12">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src={photoUrl}
                    className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold mb-4">{itemName}</h1>
                    <p className="btn border rounded-3xl border-green-300">Stock:{stockStatus}</p>
                    <p className="">Price: ${price}</p>
                    <p>Category: {categoryName}</p>
                    <p>Description: {description}</p>
                    <p>Processing Time: {processingTime}</p>
                    <p>Customization: {customization}</p>
                    <div>
                        <p className="text-2xl font-bold">Rating: {rating}</p>
                        <Rating
                            emptySymbol={<FaStar style={{ color: "gray", fontSize: "30px" }} />}
                            fullSymbol={<FaStar className="fa fa-star" style={{ color: "yellow", fontSize: "30px" }} />}
                        >
                        </Rating>
                    </div>
                    <button className="btn btn-primary">Add to Cart</button>
                </div>
            </div>
        </div>
    );
};

export default EquipmentDetails;