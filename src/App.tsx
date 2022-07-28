import React from 'react'
import Header from './components/Header/Header'
import './styles/normalize.css'
import './styles/App.css'
import Hero from './components/Hero/Hero'


const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Hero />
    </div>
  )
}

export default App
