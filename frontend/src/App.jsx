import { MainSidebar } from "./layouts"
import Router from "./routes"

function App() {
  return (
    
   <div className="w-full h-screen flex flex-row">
    <MainSidebar />
    <div className="w-full h-full">
      <Router />
    </div>
   </div>
  )
}

export default App