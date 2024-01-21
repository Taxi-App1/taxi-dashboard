import { useContext, useState } from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import adminContext from "../context/adminContext";
function SignInPage() {
let navigate=useNavigate()
const [password, setPassword] = useState();
const [username, setUsername] = useState();
const { addTokenAdmin } = useContext(adminContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_URL}admin/login`,
        { password, username }
      );
      addTokenAdmin(response.data.token);
      localStorage.setItem("token", response.data.token);
      toast.success("LogIn successful");
      navigate("/");
    } catch (error) {
      console.log("Error:", error)
      toast.error("Error SignIn, Please Try Again");
    }}
  return (
    <section className="bg-gradient-to-r from-secondary to-primary">
      <div className="flex flex-col  items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <img
          className="w-28 h-28 rounded-full  translate-y-10 z-50  border-b-secondary  border-[6px] border-black  mr-2"
          src={logo}
          alt="logo"
        />
        <div className="w-full bg-black relative rounded-lg shadow  sm:max-w-md xl:p-0 ">
          <div className="p-6 space-y-4  mt-10 sm:p-8">
            <h1 className=" font-bold leading-tight mb-10 text-secondary md:text-3xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6"  onSubmit={handleSubmit}>
              <div>
                <label
                  for="email"
                  className="block mb-2 text-xl font-semibold text-secondary"
                >
                  User Name
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="username"
                  className="  rounded-lg  text-xl block w-full p-2.5"
                  required
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label
                  for="password"
                  className="block mb-2  font-semibold text-secondary "
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="  rounded-lg   block w-full p-2.5"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              {/* <div className="flex items-center justify-between">
                      <div className="flex items-start">
                          <div className="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required=""/>
                          </div>
                          <div className="ml-3 text-sm">
                            <label for="remember" className="text-secondary">Remember me</label>
                          </div>
                      </div>
                     <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                  </div> */}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full text-black text-xl font-bold  bg-gradient-to-r from-secondary to-primary hover:bg-primary-700 focus:ring-4 focus:outline-none  rounded-lg  px-5 py-2.5 text-center "
              >
                Sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignInPage;
