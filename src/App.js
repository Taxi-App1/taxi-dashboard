import { Route, Routes } from "react-router-dom";
import Layouts from "./Layouts/Layouts";
import SignInPage from "./Pages/SignInPage";
import DriverPage from "./Pages/DriverPage";
import UserPage from "./Pages/UsersPage";
import OrderPage from "./Pages/OrderPage";
import DashboardPage from "./Pages/DashboardPage";
import AdminPage from "./Pages/Admin";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import "./App.css"
import { AdminProvider } from "./context/adminContext";
import RequireAdmin from "./context/protect";
function App() {
  return (
    <div className="">
        <AdminProvider>
      <Routes>
        <Route path="/sign-in" element={<SignInPage />} />
        <Route element={<RequireAdmin/>}>
        <Route path="/" element={<Layouts />}>
          <Route path="/" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/driver" element={<DriverPage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/order" element={<OrderPage />} />
        </Route>
        </Route>
      </Routes>
      </AdminProvider>
      <ToastContainer   position="top-right"
    autoClose={3000}
    newestOnTop={false}
    closeOnClick
    pauseOnFocusLoss
    draggable
    pauseOnHover />
    </div>
  );
}

export default App;
