import React from 'react'
import './About.css'

const About: React.FC = () => {
  return (
    <section className='about'>
      <div className='container'>
        <p className='about__description'>
          Компания <strong>СлонУм</strong> – проводит конкурс для детей, в котором могут участвовать ребята <span className='about__accent'><strong>всех возрастов!</strong></span> Номинации, в которых можно победить, есть возможность проявить себя во всех направлениях, и&nbsp;даже <span className='about__accent'><strong>без художественных способностей.</strong></span>
        </p>
      </div>
    </section>
  )
}

export default About
