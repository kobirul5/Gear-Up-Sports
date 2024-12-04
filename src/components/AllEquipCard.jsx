import { useLoaderData } from "react-router-dom";
import EquipmentCard from "./EquipmentCard";

const AllEquipCard = () => {
    const equipments = useLoaderData()
    return (
        <div className="">
          
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                equipments?.map((equipment)=><EquipmentCard
                    key={equipment._id}
                    equipment={equipment}
                    ></EquipmentCard>
                )
            }
          </section>
        </div>
    );
};

export default AllEquipCard;