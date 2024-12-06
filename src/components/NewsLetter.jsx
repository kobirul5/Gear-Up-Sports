import Heading from "./Heading";

import Snow from "../assets/Snow.svg";
// import Snow from "../assets/images/Banner.jpg";

const NewsLetter = () => {
    return (
        <div
            className="sm:w-[80%] text-white mx-auto px-10 py-20 border rounded-3xl"
            style={{
                backgroundImage: `url(${Snow})`,
            }}
        >
            <Heading
                title={"Gear Up with the Latest!"}
                subtitle={"Join our newsletter for updates on new arrivals, discounts, and sports insights"}
            ></Heading>
            <div className="mx-auto flex justify-center">
                <input
                    type="text"
                    placeholder="Email"
                    className="input input-bordered rounded-r-none w-full text-dark max-w-xs" />
                    <button id="news-btn" className="btn rounded-l-none bg-blue-400">Submit</button>
            </div>
        </div>
    );
};

export default NewsLetter;