import { MainSidebar, SocialMedia, Auth, RequireAuth } from "./layouts"
import { Layout } from "./components"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    
   <div className="w-full h-screen flex flex-row">
    <MainSidebar />
    <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Public Route */}
          <Route index element={<Auth />} />

          {/* Private Route */}
          <Route element={<RequireAuth />} >
            <Route path="/home" element={<SocialMedia />}  />
          </Route>
        </Route>
      </Routes>
    </div>
   </div>
  )
}

export default App