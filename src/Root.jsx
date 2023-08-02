import Navbar from "./components/Header/Navbar"
import { Outlet } from "react-router-dom"
import getProductsFromStorage from "../storage/getProductsFromStorage";
import { createContext, useState } from "react"
export const itemsContext = createContext();
export const Root = () => {
  const [items, setItems] = useState(getProductsFromStorage() || [])
  return (
   <itemsContext.Provider value={{items, setItems}}>
     <div>
        <Navbar/>
        <Outlet/>
    </div>
   </itemsContext.Provider>
  )
}
