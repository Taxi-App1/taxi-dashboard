import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import logo from "../assets/logo.jpg"
import car from "../assets/car.svg"
import users from "../assets/users.svg"
import dashboard from "../assets/dashboard.svg"
import logout from "../assets/logout.svg"




function SideBarComponent(props) {
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
    <div className={`flex flex-col h-screen items-center p-10 justify-around bg-black ${className}`}>
      <div>
        <img src={logo} alt="Logo" className="rounded-full md:w-32 md:h-32 w-full h-full"/>
      </div>
      <div className="flex flex-col gap-4">
        {links.map((link, index) => (<div className="flex flex-row   md:justify-between gap-4">
        <img src={link.icon} alt="Logo" className=" self-center w-10 h-10"/>
          <Link className=" text-secondary font-semibold text-3xl  md:w-32 py-5 " key={index} to={link.link}>
            {link.name}
          </Link>
          </div>
        ))}
        </div>
        
        <div className="flex flex-row border-secondary  md:justify-between gap-4">
        <img src={logout} alt="Logo" className="  self-center w-10 h-10"/>
          <p className=" text-secondary font-semibold  text-3xl w-32 py-5 " >
            Admin
          </p>
          </div>
    </div>
  );
}

export default SideBarComponent;
