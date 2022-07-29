import React from 'react'
import Header from './components/Header/Header'
import './styles/normalize.css'
import './styles/App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Advantages />
    </div>
  )
}

export default App
