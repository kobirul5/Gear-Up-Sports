import FootballDis from "../assets/images/footballdis.jpg"
import BadmintonDis from "../assets/images/batmintondis.jpg"
const Discount = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-between gap-10 text-whit my-10">
            <div
                className="bg-cover lg:w-[50%] rounded-md"
                style={{
                    backgroundImage: `url(${BadmintonDis})`,
                }}
            ><div className="bg-gradient-to-r space-y-5 rounded-md from-primary to-[#e4875252] p-10 py-20">

                    <p>FLAT 30% DISCOUNT</p>
                    <h3 className="text-2xl font-bold">SHAFT BADMINTON <br></br> RACKET SET</h3>
                    <button className="btn text-secondary hover:bg-[#7e4a2c70] bg-[#7e4a2c96] border-dark hover:border-dark hover:text-secondary">Shop Now</button>
                </div>
            </div>
            <div
                className="bg-cover lg:w-[50%] rounded-md"
                style={{
                    backgroundImage: `url(${FootballDis})`,
                }}
            ><div className="bg-gradient-to-r rounded-md space-y-5 from-primary to-[#e4875252] p-10 py-20">

                    <p>FLAT 30% DISCOUNT</p>
                    <h3 className="text-2xl font-bold">SHAFT <br></br> FOOTBALL </h3>
                    <button className="btn text-secondary hover:bg-[#7e4a2c70] bg-[#7e4a2c96] border-dark hover:border-dark hover:text-secondary">Shop Now</button>
                </div>
            </div>
        </div>
    );
};

export default Discount;