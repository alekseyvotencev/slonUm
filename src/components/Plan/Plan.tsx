import React from 'react'
import './Plan.css'

const Plan = () => {
  return (
    <section className='plan'>
      <div className='container'>
        <h3 className='plan__title'>Пошаговый план</h3>
        <div className='plan__points'>
          <div className="plan__point point1">
            <div className='plan__point-number'>1</div>
            <p className='plan__point-text'>Зарегистрируйтесь на конкурс <a href="/" className='plan__point-text-link'>Здесь</a></p>
          </div>

          <div className="plan__point point2">
            <div className='plan__point-number'>2</div>
            <p className='plan__point-text'>Выполните все условия конкурса</p>
          </div>

          <div className="plan__point point3">
            <div className='plan__point-number'>3</div>
            <p className='plan__point-text'>Загрузите рисунок <a href="/" className='plan__point-text-link'>Здесь</a> или в Личном кабинете</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan
