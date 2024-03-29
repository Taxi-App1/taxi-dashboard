import React from "react";
import { Link, useNavigate } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.jpg"
import car from "../assets/car.svg"
import users from "../assets/users.svg"
import dashboard from "../assets/dashboard.svg"
import logout from "../assets/logout.svg"
import { toast } from "react-toastify";

import { useMediaQuery } from "@mui/material";




function SideBarComponent(props) {

  const links = [
    {
      name: "Dashboard",
      link: "/",
      icon: dashboard
    },
    {
      name: "Admins",
      link: "/admin",
       icon: users
    },
    {
      name: "Drivers",
      link: "/driver",
     icon: car
    },
    {
      name: "Users",
      link: "/user",
       icon: users
    },
    // {
    //   name: "Order",
    //   link: "/driver",
    //    icon: car
    // }
  ]

  let { className } = props;
  const isMobile= useMediaQuery("(max-width: 760px)")
  const navigate = useNavigate();
   const handleLogout = ()=>{

    try{
    localStorage.removeItem("token")
    toast.success("Logged out")
    navigate("/sign-in"); 
  }
    catch(err){
      console.log("Error",err)
    }
   }
  return (
    <div className={`flex flex-col gap-4 h-screen shadow-lg md:items-center items-start md:p-10 p-3 md:justify-around bg-white ${className}`}>
      <div>
        <img src={logo} alt="Logo" className="rounded-full md:w-32 md:h-32 w-12 h-12 "/>
      </div>
      <div className="flex  flex-col gap-4">
        {links.map((link, index) => (<Link   key={index} to={link.link} className={`flex flex-row justify-around p-2  bg-gradient-to-r from-secondary to-primary   rounded-lg  md:justify-between gap-4`} >
        <img src={link.icon} alt="Logo" className= {` bg-white  rounded-lg  md:p-2 p-1  self-center md:w-10 md:h-10 w-8 h-8`}/>
       {!isMobile && 
         <Link className={`text-white  font-semibold text-2xl  flex-1  py-3 `} to={link.link}>
            {link.name}
          </Link>
         } 
          </Link>
        ))}
        </div>
        
        <div onClick={()=>{ handleLogout()  }} className= {`flex cursor-pointer flex-row justify-around p-2  bg-gradient-to-r from-secondary to-primary   rounded-lg  md:justify-between gap-4`} >
        <img src={logout} alt="Logo" className= {` bg-white  rounded-lg  p-2  self-center md:w-10 md:h-10 w-8 h-8`}/>
        {!isMobile &&   <p className={` text-white   font-semibold text-2xl w-32  flex-1  py-3 `} >
          Admin
          </p> }
          </div>
    </div>
  );
}

export default SideBarComponent;
