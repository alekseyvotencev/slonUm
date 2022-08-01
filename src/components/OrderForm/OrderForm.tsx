import React, { useState } from 'react'
import OrderCheckbox from '../UI/Checkbox/OrderCheckbox';
import Input from '../UI/Input/Input'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';
import './OrderForm.css'

const OrderForm = () => {
  const [user, setUser] = useState({ fullname: '', birthday: '', city: '', email: '', password: '' });

  return (
    <div>
      <h4 className='order__form-title'>Зарегистрируйтесь, чтобы участвовать</h4>
      <form className='order__form'>
        <Input type='text' placeholder='ФИО ребёнка' key='ФИО ребёнка' value={user.fullname} onChange={(event) => setUser({ ...user, fullname: event.target.value })} className='order__form-input' />
        <Input type='date' placeholder='Дата рождения' key='Дата рождения' value={user.birthday} onChange={(event) => setUser({ ...user, birthday: event.target.value })} className='order__form-input' />
        <Input type='text' placeholder='Город' key='Город' value={user.city} onChange={(event) => setUser({ ...user, city: event.target.value })} className='order__form-input' />
        <Input type='email' placeholder='Email' key='Email' value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} className='order__form-input' />
        <Input type='password' placeholder='Пароль' key='Пароль' value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} className='order__form-input' />
        <OrderCheckbox className='order__form-checkbox'/>
        <PrimaryButton className="order__form-btn">Участвовать</PrimaryButton>
      </form>
    </div >
  )
}

export default OrderForm
