import React from 'react'
import Header from './components/Header/Header'
import './styles/normalize.css'
import './styles/App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Advantages from './components/Advantages/Advantages'
import Plan from './components/Plan/Plan'
import Certificates from './components/Certificates/Certificates'
import Order from './components/Order/Order'
import QA from './components/QA/QA'
import Mailing from './components/Mailing/Mailing'
import Footer from './components/Footer/Footer'


const App: React.FC = () => {
  return (
    <div className='body__container'>
      <Header />
      <Hero />
      <About />
      <Advantages />
      <Plan />
      <Certificates />
      <Order />
      <QA />
      <Mailing />
      <Footer />
    </div>
  )
}

export default App
