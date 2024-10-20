import { BrowserRouter, Route, Routes } from "react-router-dom"
import LoginPage from "./Pages/LoginPage"
import OtpPage from "./Pages/OtpPage"
import CategoriesPage from "./Pages/CategoriesPage"
import PanditProfilePage from "./Pages/PanditProfilePage"
import ServicesPage from "./Pages/ServicesPage"
import Conformation from "./Pages/Conformation"

function App() {


  return (
    <BrowserRouter>
        <Routes>

          <Route path = "/" element={<LoginPage/>}/>
          <Route path = "/otp" element={<OtpPage/>}/>
          <Route path = "/pandit-profile" element={<PanditProfilePage/>}/>
          <Route path = "/categories" element={<CategoriesPage/>}/>
          <Route path = "/services" element={<ServicesPage/>}/>
          <Route path = "/confirmation" element={<Conformation/>}/>

        </Routes>

    </BrowserRouter>
  )
}

export default App
