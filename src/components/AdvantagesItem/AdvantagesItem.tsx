import React from 'react'
import { AdvantagesItemProps } from '../../types/types'
import './AdvantagesItem.css'

const AdvantagesItem: React.FC<AdvantagesItemProps> = ({ id, description }) => {
  return (
    <article className='advatages__list-item'>
      <img src={require(`../../img/${id}.png`)} alt="Иконка" className='advatages__list-item-img' />
      <p className='advatages__list-item-description'>{description}</p>
    </article>
  )
}

export default AdvantagesItem
