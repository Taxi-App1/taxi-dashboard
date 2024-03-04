import React, { useEffect, useState } from "react";
import DashboardCard from "../Components/DashboardComponent/dashboardCard";
import request from "../utils/Api";
import AdminPage from "./Admin";
import UserPage from "./UsersPage";
function DashboardPage () {
    const [data, setData] = useState({
        admins: 0,
        drivers: 0,
        users: 0
      });
    
      const getAdmins = async () => {
        const adminsData = await request.getAdmin();
        setData(prevData => ({ ...prevData, admins: adminsData.length }));
      };
    
      const getDrivers = async () => {
        const driversData = await request.getDriver();
        setData(prevData => ({ ...prevData, drivers: driversData.length }));
      };
    
      const getUsers = async () => {
        const usersData = await request.getUser();
        setData(prevData => ({ ...prevData, users: usersData.length }));
      };
    
      useEffect(() => {
        const fetchData = async () => {
          await Promise.all([
            getAdmins(),
            getDrivers(),
            getUsers()
          ]);
        };
    
        fetchData();
      }, []);

    return ( <div className="md:m-16 m-3 flex flex-col md:gap-[100px]">
        <DashboardCard admins={data.admins} users={data.users} drivers={data.drivers}/>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <AdminPage className="md:row-span-2"/>
        <UserPage className="md:row-span-2"/>
</div>

    </div> );
}

export default  DashboardPage ;