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
import UpdateEquipment from "../pages/UpdateEquipment";
import UpdateEquipPrivate from "../privateRouter/UpdateEquipPrivate";
import MyEquipPrivate from "../privateRouter/MyEquipPrivate";
import AllEquipCard from "../components/AllEquipCard";
import ErrorPage from "../pages/ErroorPage";

const router = createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        errorElement:<ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment"),
                children: [
                    {
                        path: '/',
                        element:<AllEquipCard></AllEquipCard>,
                        loader: ()=> fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment/limit")
                    },
                    {
                        path: '/category/:category',
                        element:<AllEquipCard></AllEquipCard>,
                        loader: ()=> fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment")
                    },

                ]
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
                 const res = await fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment")
                  const allData = await res.json()
                  const singleData = allData.find(data=> data._id === params.id)
                  return singleData
                }
            },
            {
                path:"/myEquipment",
                element: <MyEquipPrivate><MyEquipment></MyEquipment></MyEquipPrivate>,
                loader: async ()=> fetch("https://assignment-10-server-beta-self.vercel.app/allEquipment")
            },
            {
                path:"/updateEquipment/:id",
                element:<UpdateEquipPrivate><UpdateEquipment></UpdateEquipment></UpdateEquipPrivate>,
                loader: ({params})=>fetch(`https://assignment-10-server-beta-self.vercel.app/allEquipment/${params.id}`)
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