import { useLoaderData, useLocation, useParams } from "react-router-dom";
import EquipmentCard from "./EquipmentCard";
import { useEffect, useState } from "react";

const AllEquipCard = () => {
    const loadedEquipments = useLoaderData()
    const location = useLocation()
    const {category}= useParams()
    const [equipments, setEquipments] = useState(loadedEquipments.slice(0,6))
    useEffect(()=>{
        if(category === location.state){
          const filterData = [...loadedEquipments].filter(g => g.categoryName === category)
         setEquipments(filterData)
      }
      else if(location.pathname === "/category/allEquip"){
        setEquipments(loadedEquipments)
      }
    },[category, location])



    console.log(location)
    return (
        <div className="">
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                equipments?.map((equipment,idx)=><EquipmentCard
                    key={idx}
                    equipment={equipment}
                    ></EquipmentCard>
                )
            }
          </section>
        </div>
    );
};

export default AllEquipCard;