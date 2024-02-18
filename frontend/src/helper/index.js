import { jwtDecode } from 'jwt-decode';

/** To get username from Token */
export function myData(){
    const token = localStorage.getItem('token')
    if(!token) return Promise.reject("No Token");
    return jwtDecode(token)
}