import {BrowserRouter, Routes, Route} from "react-router-dom"
import HomePage from "./Pages/HomePage"
import Shop from "./Pages/Shop"
import BestSellers from "./Pages/BestSellers"
import Contact from "./Pages/Contact"
import About from "./Pages/About"
import AccessoriesSupplies from "./Pages/AccessoriesSupplies"
import HomeAudio from "./Pages/HomeAudio"
import HeadPhones from "./Pages/HeadPhones"
import HomeAppliances from "./Pages/HomeAppliances"
import TelevisionAudio from "./Pages/TelevisionAudio"
import WearableTechnology from "./Pages/WearableTechnology"
import Login from "./Pages/Login"
import SignUp from "./Pages/SignUp"
import Cart from "./Pages/Cart"
import { CartProvider } from "./context/CartProvider"
import ChatBot from "./components/ChatBot"

export default function App() {
  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <ChatBot />
          <Routes>
            
          <Route path="/"  element={<HomePage/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path="/Best-Sellers" element={<BestSellers/>}/>
          <Route path="/About" element={<About/>}/>
          <Route path="/Contact" element={<Contact/>}/>
          <Route path="/Shop/AccessoriesSupplies" element={<AccessoriesSupplies/>}/>
          <Route path="/Shop/HomeAudio" element={<HomeAudio/>}/>
          <Route path="/Shop/HeadPhones" element={<HeadPhones/>}/>
          <Route path="/Shop/HomeAppliances" element={<HomeAppliances/>}/>
          <Route path="/Shop/TelevisionAudio" element={<TelevisionAudio/>}/>
          <Route path="/Shop/WearableTechnology" element={<WearableTechnology/>}/>
          <Route path="/Cart" element={<Cart/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/sign-up" element={<SignUp/>}/>
          </Routes>
        </CartProvider>
        
          
      
      </BrowserRouter>
    </>
  )
}
