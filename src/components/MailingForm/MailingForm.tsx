import React, { useState } from 'react'
import OrderCheckbox from '../UI/Checkbox/OrderCheckbox'
import Input from '../UI/Input/Input'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'
import './MailingForm.css'

const MailingForm = () => {
  const [email, setEmail] = useState('');
  const [agree, setAgree] = useState(false);

  const sendMailing = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !agree) return;

    else {
      let customer = {
        email: email,
      }
      console.log(customer);
      setEmail('');
    }
  }

  return (
    <form className='mailing__form' onSubmit={sendMailing}>
      <div>
        <Input placeholder='Email' type='email' key='email' value={email} onChange={(event) => setEmail(event.target.value)} className='mailing__form-input' />
        <PrimaryButton className='mailing__form-btn'>Отправить</PrimaryButton>
      </div>
      <OrderCheckbox className='mailing__form-checkbox' onChange={() => setAgree(!agree)} />
    </form>
  )
}

export default MailingForm
