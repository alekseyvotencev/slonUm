import React, { useState } from 'react'
import OrderCheckbox from '../UI/Checkbox/OrderCheckbox';
import Input from '../UI/Input/Input'
import PrimaryButton from '../UI/PrimaryButton/PrimaryButton';
import './OrderForm.css'
import plane1 from '../../img/orderPlane1.svg'
import plane2 from '../../img/orderPlane2.svg'
import plane from '../../img/plane.svg'

const OrderForm = () => {
  const [user, setUser] = useState({ fullname: '', birthday: '', city: '', email: '', password: '' });
  const [agree, setAgree] = useState(false);

  const sendOrder = (event: React.FormEvent) => {
    event.preventDefault();
    if (!user.fullname || !user.birthday || !user.city || !user.email || !user.password || !agree) return;

    else {
      let customer = {
        fullname: user.fullname,
        birthday: user.birthday,
        city: user.city,
        email: user.email,
        password: user.password,
      }
      console.log(customer);
      setUser({ fullname: '', birthday: '', city: '', email: '', password: '' })
    }
  }

  return (
    <div className='order__form-container'>
      <h4 className='order__form-title'>Зарегистрируйтесь, чтобы участвовать</h4>
      <form className='order__form' onSubmit={sendOrder}>
        <Input type='text' placeholder='ФИО ребёнка' key='ФИО ребёнка' value={user.fullname} onChange={(event) => setUser({ ...user, fullname: event.target.value })} className='order__form-input' />
        <Input type='date' placeholder='Дата рождения' key='Дата рождения' value={user.birthday} onChange={(event) => setUser({ ...user, birthday: event.target.value })} className='order__form-input' />
        <Input type='text' placeholder='Город' key='Город' value={user.city} onChange={(event) => setUser({ ...user, city: event.target.value })} className='order__form-input' />
        <Input type='email' placeholder='Email' key='Email' value={user.email} onChange={(event) => setUser({ ...user, email: event.target.value })} className='order__form-input' />
        <Input type='password' placeholder='Пароль' key='Пароль' value={user.password} onChange={(event) => setUser({ ...user, password: event.target.value })} className='order__form-input' />
        <OrderCheckbox className='order__form-checkbox' checked={agree} onChange={() => setAgree(!agree)} />
        <PrimaryButton className="order__form-btn">Участвовать</PrimaryButton>
      </form>
      <img src={plane1} alt="" className='plane1' />
      <img src={plane2} alt="" className='plane2' />
      <img src={plane} alt="" className='plane' />
    </div >
  )
}

export default OrderForm
