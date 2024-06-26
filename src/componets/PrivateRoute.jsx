import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user,loding} = useContext(AuthContext)
    if(loding){
        return <span className="loading loading-spinner loading-lg"></span>
    }
    if(user){
        return children
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    children: PropTypes.node
}