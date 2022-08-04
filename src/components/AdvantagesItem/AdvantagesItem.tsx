import React from 'react'
import { AdvantagesItemProps } from '../../types/types'
import './AdvantagesItem.css'

const AdvantagesItem: React.FC<AdvantagesItemProps> = ({ icon, description }) => {
  return (
    <article className='advatages__list-item'>
      <img src={icon} alt="Иконка" className='advatages__list-item-img' />
      {
        description.includes('ВКонтакте')
          ?
          <p className='advatages__list-item-description'>{description} <a href="/" className='advatages__list-item-link'>Подписывайтесь!</a></p>
          :
          <p className='advatages__list-item-description'>{description}</p>
      }
    </article>
  )
}

export default AdvantagesItem
