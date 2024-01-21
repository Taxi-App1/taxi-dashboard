import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.jpg"
import car from "../assets/car.svg"
import users from "../assets/users.svg"
import dashboard from "../assets/dashboard.svg"
import logout from "../assets/logout.svg"




function SideBarComponent(props) {
  const [clicked,setcliked]=useState(true)
  const links = [
    {
      name: "Dashboard",
      link: "/",
      icon: dashboard
    },
    {
      name: "Admin",
      link: "/admin",
       icon: users
    },
    {
      name: "Driver",
      link: "/driver",
     icon: car
    },
    {
      name: "Users",
      link: "/user",
       icon: users
    },
    {
      name: "Order",
      link: "/driver",
       icon: car
    }
  ]

  let { className } = props;

  return (
    <div className={`flex flex-col h-screen shadow-lg items-center p-10 justify-around bg-white ${className}`}>
      <div>
        <img src={logo} alt="Logo" className="rounded-full md:w-32 md:h-32 w-full h-full"/>
      </div>
      <div className="flex  flex-col gap-4">
        {links.map((link, index) => (<div  className={`flex flex-row justify-around px-2  bg-gradient-to-r from-secondary to-primary   rounded-lg  md:justify-between gap-4`} key={index}>
        <img src={link.icon} alt="Logo" className= {` bg-white  rounded-lg  p-2  self-center w-10 h-10`}/>
          <Link className={`${clicked ?"text-white ":"text-secondary"}   font-semibold text-2xl  flex-1  py-3 `} key={index} to={link.link}>
            {link.name}
          </Link>
          </div>
        ))}
        </div>
        
        <div className={`flex flex-row justify-around px-2  bg-gradient-to-r from-secondary to-primary   rounded-lg  md:justify-between gap-4`} >
        <img src={logout} alt="Logo" className= {` bg-white  rounded-lg  p-2  self-center w-10 h-10`}/>
          <p className={` text-white   font-semibold text-2xl w-32  flex-1  py-3 `} >
          Admin
          </p>
          </div>
    </div>
  );
}

export default SideBarComponent;
