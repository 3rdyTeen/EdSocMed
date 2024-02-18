import { Outlet, Navigate, useLocation } from "react-router-dom"
import { selectCurrentToken } from "../redux/features/auth/authSlice"
import { useSelector } from "react-redux"

const RequireAuth = () => {

    const token = useSelector(selectCurrentToken);
    const location = useLocation();

  return (
    token 
        ? <Outlet />
        : <Navigate to="/" state={{from: location}} replace />
  )
}

export default RequireAuth