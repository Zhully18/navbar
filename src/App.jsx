import Header from "./component/header/header"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './component/Home/Home'
import About from './component/About/About'
import Contact from './component/Contact/Contact'
import Shop from './component/Shop/Shop'
import Login from "./component/Login/Login"

function App() {
  

  return (
    <>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home/> }/>
        <Route path='/about' element={<About/> }/>
        <Route path='/contact' element={<Contact/> }/>
        <Route path='/shop' element={<Shop/> }/>
        <Route path='/login' element={<Login/> }/>
      </Routes>
    </BrowserRouter>
      
    </>
  )
}

export default App
