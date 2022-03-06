import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HeaderComponent from './Components/header/header'
import HomeComponent from './Components/home/home'
import AboutComponent from './Components/about/about'
import PortafolioComponent from './Components/portafolio/portafolio'
import FooterComponent from './Components/footer/footer'
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AccountComponent from './Components/account/account'

function App() {
  const [count, setCount] = useState(0)

  const [arr, setArr] = useState<number[]>([]);

  type Game = {
    name: String;
    id: Number;
  }

  let game: Game = {
    name:'George',
    id: 4,
  }

  return (
    <BrowserRouter>
      <HeaderComponent />
      <Routes>
        <Route path="/account" element={<AccountComponent />} />
        <Route path="/" element={<HomeComponent />} />
      </Routes>
      <FooterComponent />
    </BrowserRouter>
  )
}

export default App
