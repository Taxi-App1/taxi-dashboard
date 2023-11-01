import React from "react";
import DashboardCard from "../Components/DashboardComponent/dashboardCard";
import DonateCharts from "../Components/DashboardComponent/dashboardChart";
function DashboardPage () {
    return ( <div className="m-16 flex flex-col md:gap-[100px]">
        <DashboardCard/>

<div className="flex flex-row justify-between">
        <DonateCharts/>
        <DonateCharts/>
        </div>
    </div> );
}

export default  DashboardPage ;