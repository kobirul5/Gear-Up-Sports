import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import {Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            className="footer mx-auto text-primary p-10 container">
            <nav>
                <h6 className="text-3xl font-bold">GearUp Sports</h6>
                <a className="link link-hover">About Us</a>
                <p className="max-w-[350px]">Welcome to GearUp Spots, your ultimate destination for high-quality sports gear and apparel. We are passionate about helping athletes and enthusiasts reach their full potential with the best products and seamless shopping experience</p>
            </nav>
            <nav >
                <h6 className="footer-title">Company</h6>
                    <Link to="/allEquipment">All Sports Equipment</Link>
                    <Link to="/addEquipment">Add Equipment</Link>
                    <Link to="/myEquipment">My Equipment List</Link>
                    <a>Contact Us</a>

            </nav>
            <nav>
                <h6 className="footer-title">Social</h6>
                <div className="grid grid-flow-col gap-4 text-3xl">
                    <a className="text-cyan-700">
                        <FaTwitter></FaTwitter>
                    </a>
                    <a className="text-blue-700">
                        <FaFacebook></FaFacebook>
                    </a>
                    <a className="text-red-700">
                        <FaYoutube />
                    </a>
                </div>
            </nav>
        </footer>
    );
};

export default Footer;