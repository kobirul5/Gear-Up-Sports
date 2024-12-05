import { CiDeliveryTruck } from "react-icons/ci";
import { FaRocket } from "react-icons/fa";
import { RiCustomerService2Fill } from "react-icons/ri";

const Benefits = () => {
    return (
        <div className="flex flex-col md:flex-row justify-around gap-16 text-center">
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="p-5 rounded-full border text-4xl bg-orange-300">
                    <FaRocket></FaRocket>
                </div>
                <h4 className="text-xl font-bold">Free Delivery</h4>
                <p>Fast and free shipping on all orders, straight to your doorstep</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="p-5 rounded-full border text-4xl bg-orange-300">
                    <CiDeliveryTruck />
                </div>
                <h4 className="text-xl font-bold">Money Guarantee</h4>
                <p>Shop with confidence - 100% satisfaction or your money back.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-3">
                <div className="p-5 rounded-full border text-4xl bg-orange-300">
                    <RiCustomerService2Fill />
                </div>
                <h4 className="text-xl font-bold">Online Support</h4>
                <p>We're here for you 24/7 - reach out anytime, anywhere</p>
            </div>
        </div>
    );
};

export default Benefits;