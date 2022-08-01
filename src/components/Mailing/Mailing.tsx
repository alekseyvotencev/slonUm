import React from 'react'
import MailingForm from '../MailingForm/MailingForm'
import './Mailing.css'

const Mailing: React.FC = () => {
  return (
    <div className='mailing__container'>
      <div className="mailing">
        <h3>Подпишись на нашу рассылку</h3>
        <p>Обещаем присылать только самое важное и интересное :)</p>
        <MailingForm />
      </div>
    </div>
  )
}

export default Mailing
