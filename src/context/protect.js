import { useLocation, Navigate, Outlet } from "react-router-dom";
const RequireAdmin = () => {
  // const {token} =useContext(adminContext)
  var token = localStorage.getItem("token");
  const location = useLocation();

  if (token) {
    return <Outlet/>
  } else {
    return (
      <Navigate to="/sign-in" state={{ from: location }} replace />
    );
  }
};

export default RequireAdmin;