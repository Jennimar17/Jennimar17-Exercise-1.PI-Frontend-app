import Home from "./components/Home/Home"
import Phones from "./components/Phones/Phones";
import { BrowserRouter, Routes, Route } from "react-router-dom"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<Home/>} />
        <Route path="/phones" element= {<Phones/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;