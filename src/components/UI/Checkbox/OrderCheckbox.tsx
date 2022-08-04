import React from 'react'
import { CheckboxPropsTypes } from '../../../types/types'
import classes from './OrderCheckbox.module.css'

const OrderCheckbox: React.FC<CheckboxPropsTypes> = ({ ...props }) => {
  return (
    <label className={[props.className, classes.checkbox__label].join(' ')}>
      <input type='checkbox' className={classes.checkbox__input} onChange={props.onChange} />
      <span className={classes.checkbox__input_custom}></span>
      <span className={classes.checkbox__span}>Отправляя данные, я соглашаюсь с <a href="/">Условиями конкурса</a> и <a href="/">Политикой обработки данных</a></span>
    </label>
  )
}

export default OrderCheckbox
