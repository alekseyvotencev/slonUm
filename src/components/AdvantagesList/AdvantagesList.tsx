import React from 'react'
import { AdvantagesListArray } from '../../types/types'
import AdvantagesItem from '../AdvantagesItem/AdvantagesItem'
import './AdvantagesList.css'

const AdvantagesList: React.FC = () => {

  return (
    <div className='advantages__list'>
      {AdvantagesListArray.map(item =>
        <AdvantagesItem icon={item.icon} description={item.description} key={item.icon} />)
      }
    </div>
  )
}

export default AdvantagesList
