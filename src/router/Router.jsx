import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";
import AuthPage from "../pages/AuthPage";
import AddEquipment from "../pages/AddEquipment";

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
                element:<AddEquipment></AddEquipment>
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