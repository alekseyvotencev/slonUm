import React from 'react'
import { InputPropsTypes } from '../../../types/types'
import classes from './Input.module.css'

const Input: React.FC<InputPropsTypes> = ({ ...props }) => {
  return (
    <input type={props.type} className={[props.className, classes.input].join(' ')} placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
  )
}

export default Input
