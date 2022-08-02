import React from 'react'
import { AccordionContentItemProps } from '../../types/types'
import './AccordiomContentItem.css'

const AccordiomContentItem: React.FC<AccordionContentItemProps> = ({ content }) => {
  return (
    <div className='accordion__content'>
      <p className='accordion__content-text'>{content}</p>
    </div>
  )
}

export default AccordiomContentItem
