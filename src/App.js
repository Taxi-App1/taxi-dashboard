
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import SignInPage from "./Pages/SignInPage";
import DriverPage from "./Pages/DriverPage";
import UserPage from "./Pages/UsersPage";
import OrderPage from "./Pages/OrderPage";
import DashboardPage from "./Pages/DashboardPage";
import AdminPage from "./Pages/Admin";
function App() {
  return (
    <div className="">
          <Routes>
          <Route path="/" element={<Layouts/>}>
                <Route path="/" element={<DashboardPage/>} />
                <Route path="/signIn" element={<SignInPage/>} />
                <Route path="/admin" element={<AdminPage/>} />
                <Route path="/driver" element={<DriverPage/>} />
                <Route path="/user" element={<UserPage/>} />
                <Route path="/order" element={<OrderPage/>} />
                {/* <Route element={<RequireUser/>}>
                <Route path="/" element={} />
                <Route path="/" element={} />
                </Route> */}
              </Route>
          </Routes>
    </div>
  );
}

export default App;
