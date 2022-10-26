import {useSelector} from "react-redux"
import {useLocation,Navigate} from "react-router-dom"
import { getItem } from "../../Utils/localstorage"

const RequireAuth = ({children}) => {

    const allState = useSelector((state)=>state.authReducer)
    const token = getItem("token")
    const location  = useLocation()

    if(token){
        return children
    }else{
        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }

}

export default RequireAuth