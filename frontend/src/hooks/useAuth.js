import { selectCurrentToken } from "../redux/features/auth/authSlice"
import { useSelector } from "react-redux"

export default function useAuth() {
    return useSelector(selectCurrentToken);
}