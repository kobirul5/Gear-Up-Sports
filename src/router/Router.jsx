import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage";
import AddEquipment from "../pages/AddEquipment";
import AddEquiPrivate from "../privateRouter/AddEquiPrivate";
import AllEquipment from "../pages/AllEquipment";
import EquipmentDetails from "../pages/EquipmentDetails";
import EquipmentPrivate from "../privateRouter/EquipmentPrivate";
import MyEquipment from "../pages/MyEquipment";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path:'/addEquipment',
                element:<AddEquiPrivate><AddEquipment></AddEquipment></AddEquiPrivate>
            },
            {
                path:'/allEquipment',
                element: <AllEquipment></AllEquipment>
            },
            {
                path:"/equipmentDetails/:id",
                element: <EquipmentPrivate><EquipmentDetails></EquipmentDetails></EquipmentPrivate>,
                loader: async ({params})=> {
                 const res = await fetch("http://localhost:4000/allEquipment")
                  const allData = await res.json()
                  const singleData = allData.find(data=> data._id === params.id)
                  return singleData
                }
            },
            {
                path:"/myEquipment",
                element: <MyEquipment></MyEquipment>,
                loader: async ()=> fetch("http://localhost:4000/allEquipment")
            }
        ]
    },
    {
        path: '/auth',
        element: <AuthPage></AuthPage>,
        children:[
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/signUp',
                element: <SignUp></SignUp>
            }
        ]
    }
])

export default router;