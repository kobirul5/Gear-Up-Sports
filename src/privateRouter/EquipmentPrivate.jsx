import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/Loading";

const EquipmentPrivate = ({children}) => {
    const {user, loading} = useContext(AuthContext)
    const navigate = useNavigate()
    const location = useLocation()
    if(loading){
        return <Loading></Loading>
    }
    if(user){
        return children
    }
    return (
       <Navigate state={location.pathname} to="/auth/login"></Navigate>
    );
};

export default EquipmentPrivate;