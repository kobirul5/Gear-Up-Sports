import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const MyEquipPrivate = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
       <Navigate to="/auth/login"></Navigate>
    );
};

export default MyEquipPrivate;