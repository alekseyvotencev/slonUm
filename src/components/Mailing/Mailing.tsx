import React from 'react'
import MailingForm from '../MailingForm/MailingForm'
import './Mailing.css'

const Mailing: React.FC = () => {
  return (
    <div className='mailing__container'>
      <div className='mailing'>
        <h3 className='mailing__title'>Подпишись на нашу рассылку</h3>
        <p className='mailing__description'>Обещаем присылать только самое важное и интересное :)</p>
        <MailingForm />
      </div>
    </div>
  )
}

export default Mailing
