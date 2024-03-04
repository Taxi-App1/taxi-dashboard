import { useState } from "react";
import { createContext } from "react";
const adminContext = createContext();

export function AdminProvider({ children }) {
  const [token, setTokenAdmin] = useState("");
  const [role,setRole] = useState("")

  const addTokenAdmin = (token) => {
    setTokenAdmin(token);
 
  };
  return (
    <adminContext.Provider value={{ token, addTokenAdmin ,role , setRole }}>
      {children}
    </adminContext.Provider>
  );
}
export default adminContext;
    