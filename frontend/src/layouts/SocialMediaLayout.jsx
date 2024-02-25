import { SocialMediaSidebar } from "../components"
import { useAuth } from "../hooks";
import { Outlet, Navigate } from "react-router-dom"

const SocialMediaLayout = () => {
  const isLoggedIn = useAuth();

  if(!isLoggedIn){
    return <Navigate to='/auth/login' replace />
  }
  return (
      <div className='flex h-full justify-between'>
          <SocialMediaSidebar />
          <div className="flex h-full w-full">
              <Outlet />
          </div>     
      </div>
  )
}

export default SocialMediaLayout