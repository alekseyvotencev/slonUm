import React from 'react'
import Picture from '../Picture/Picture';
import Timer from '../Timer/Timer'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';
import './Hero.css'

const Hero = () => {

  const endCompetition = new Date('2022.08.08');

  return (
    <div className="container">
      <div className='hero'>
        <div className='hero__text'>
          <p className='hero__text-company'>ОТ КОМПАНИИ СЛОНУМ</p>
          <h1 className='hero__text-title'>Всероссийский конкурс Детского рисунка</h1>
          <p className='hero__text-description'>Учавствуйте в конкурсе и получайте призы в различных номинациях детского рисунка для всех возрастов</p>
          <div className='hero__actions'>
            <PrimaryButton className='hero__actions-btn'>Участвовать</PrimaryButton>
            <div className='hero__actions-timer'>
              <Timer endtime={endCompetition} />
            </div>
          </div>
        </div>
        <Picture />
      </div>
    </div>
  )
}

export default Hero
