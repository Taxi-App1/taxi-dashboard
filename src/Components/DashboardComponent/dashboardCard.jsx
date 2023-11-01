import React from "react";
import car from "../../assets/car.svg"
import users from "../../assets/users.svg"

function DashboardCard() {
    const card = [
        {
          name: "Admin",
          link: "/",
          icon: users
        },
        {
          name: "Driver",
          link: "/driver",
         icon: car
        },
        {
          name: "Users",
          link: "/User",
           icon: users
        },
        {
          name: "Order",
          link: "/driver",
           icon: car
        }
      ]
    return (
     <div className="flex flex-row flex-wrap justify-between gap-4">
      {card.map((card, index) => (  <div className=" bg-gradient-to-r border-l-[5px] border-black from-secondary to-primary rounded-lg shadow-md flex-col gap-6 w-[20%] p-4">
        <div className="flex flex-row   justify-around gap-4">
        <img src={card.icon} alt="Logo" className=" self-center p-2 bg-black rounded-full w-14 h-14"/>
          <p className=" text-black font-semibold text-3xl   py-5 " key={index} >
            {card.name}
          </p>
          </div>
       
<p className="text-3xl font-bold ml-5 text-black">3000</p>
        </div> ))}
    </div> );
}

export default DashboardCard;