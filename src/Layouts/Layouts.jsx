import React from "react";
import { Outlet } from "react-router-dom";
import SideBarComponent from "../Components/sideBarComponent";

function Layouts() {
    return ( 
        <div className="flex flex-row w-full">
        <SideBarComponent className="w-[20%]"/>
        <div className="w-screen p-5 overflow-x-auto">
        <Outlet />
        </div>
        </div>
     );
}

export default Layouts;