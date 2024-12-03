import { useEffect, useState } from "react";
import EquipmentCard from "../components/EquipmentCard";

const AllEquipment = () => {
    const [equipments, setEquipments] = useState()
    
    useEffect(()=>{
        fetch("http://localhost:4000/allEquipment")
        .then(res=>res.json())
        .then(data=>setEquipments(data))
    },[])
    console.log(equipments)
    return (
        <div className="container mx-auto px-5 md:px-10 my-12">
          
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

export default AllEquipment;