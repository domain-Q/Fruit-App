import Home from "./Home"
import { Route, Routes } from "react-router-dom"


function App() {
 
  
  return (
    <Routes>
       <Route path="/" element={<Home/>}/>
       <Route path="/home" element={<Home/>}/>
       <Route path="/items/:type" element={<Home/>}/>
    </Routes>
     )
}

export default App
