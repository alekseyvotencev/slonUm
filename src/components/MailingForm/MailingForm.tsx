import React, { useState } from 'react'
import OrderCheckbox from '../UI/Checkbox/OrderCheckbox'
import Input from '../UI/Input/Input'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import './MailingForm.css'

const MailingForm = () => {
  const [email, setEmail] = useState('');

  return (
    <form className='mailing__form'>
      <div>
        <Input placeholder='Email' type='email' key='email' value={email} onChange={(event) => setEmail(event.target.value)} className='mailing__form-input' />
        <PrimaryButton className='mailing__form-btn'>Отправить</PrimaryButton>
      </div>
      <OrderCheckbox className='mailing__form-checkbox'/>
    </form>
  )
}

export default MailingForm
