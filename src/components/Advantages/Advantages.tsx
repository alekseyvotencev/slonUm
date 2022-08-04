import React from 'react'
import AdvantagesList from '../AdvantagesList/AdvantagesList'
import './Advantages.css'

const Advantages: React.FC = () => {
  return (
    <section className='advantages'>
      <div className="container">
        <h3 className='advantages__title'>Для чего <span className='wavy-underline'>нужно</span> участвовать</h3>
        <AdvantagesList />
      </div>
    </section>
  )
}

export default Advantages
