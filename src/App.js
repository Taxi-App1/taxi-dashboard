
import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import SignInPage from "./Pages/SignInPage";
import DriverPage from "./Pages/DriverPage";
import UserPage from "./Pages/UsersPage";
import DashboardPage from "./Pages/DashboardPage";
import OrderPage from "./Pages/OrderPage";
function App() {
  return (
    <div className="">
          <Routes>
          <Route path="/" element={<Layouts/>}>
                <Route path="/" element={<DashboardPage/>} />
                <Route path="/signIn" element={<SignInPage/>} />
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
