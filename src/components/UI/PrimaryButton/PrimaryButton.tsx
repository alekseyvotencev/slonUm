import React from 'react'
import { ButtonPropsTypes } from '../../../types/types'
import classes from './PrimaryButton.module.css'

const PrimaryButton: React.FC<ButtonPropsTypes> = ({ children, ...props }) => {
  return (
    <button {...props} className={[props.className, classes.primaryButton].join(' ')}>
      {children}
    </button>
  )
}

export default PrimaryButton
