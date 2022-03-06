import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import HeaderComponent from './Components/header/header'
import HomeComponent from './Components/home/home'
import AboutComponent from './Components/about/about'
import PortafolioComponent from './Components/portafolio/portafolio'
import FooterComponent from './Components/footer/footer'

function App() {
  const [count, setCount] = useState(0)
  type Game = {
    name: String;
    id: Number;
  }

  let game: Game = {
    name:'George',
    id: 4,
  }

  return (
    <div className="App">
      <HeaderComponent></HeaderComponent>
      <HomeComponent></HomeComponent>
      <AboutComponent></AboutComponent>
      <PortafolioComponent></PortafolioComponent>
      <FooterComponent></FooterComponent>
    </div>
  )
}

export default App
