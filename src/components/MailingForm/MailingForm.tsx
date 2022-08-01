import React, { useState } from 'react'
import OrderCheckbox from '../UI/Checkbox/OrderCheckbox'
import Input from '../UI/Input/Input'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton'

const MailingForm = () => {
  const [email, setEmail] = useState('');
  return (
    <form>
      <Input placeholder='Email' type='email' key={email} value={email} onChange={(event) => setEmail(event.target.value)} />
      <PrimaryButton>Отправить</PrimaryButton>
      <OrderCheckbox />
    </form>
  )
}

export default MailingForm
