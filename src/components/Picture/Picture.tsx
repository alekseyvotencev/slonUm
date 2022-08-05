import React from 'react'
import './Picture.css'
import girl from '../../img/girl.svg'
import pen from '../../img/pen.svg'
import elephant from '../../img/elephant.svg'
import bulb from '../../img/bulb.svg'
import rocket from '../../img/rocket.svg'
import clock from '../../img/clock.svg'
import spacePlane from '../../img/spacePlane.svg'
import stripedPlanet from '../../img/stripedPlanet.svg'
import bigPlanet from '../../img/bigPlanet.svg'
import atom from '../../img/atom.svg'
import darkPlanet from '../../img/darkPlanet.svg'
import division from '../../img/division.svg'
import plus from '../../img/plus.svg'
import balloon from '../../img/balloon.svg'
import palette from '../../img/palette.svg'
import zero from '../../img/zero.svg'
import one from '../../img/one.svg'
import stars from '../../img/stars.svg'

const Picture: React.FC = () => {
  return (
    <div className='picture'>
      <div className='picture__space'>
        <img src={elephant} alt="Слон" className='picture__space-elephant' />
        <img src={bulb} alt="Лампочка" className='picture__space-bulb' />
        <img src={rocket} alt="Ракета" className='picture__space-rocket' />
        <img src={clock} alt="Будильник" className='picture__space-clock' />
        <img src={spacePlane} alt="Самолет" className='picture__space-spacePlane' />
        <img src={stripedPlanet} alt="Полосатая планета" className='picture__space-stripedPlanet' />
        <img src={bigPlanet} alt="Большая планета" className='picture__space-bigPlanet' />
        <img src={atom} alt="Атом" className='picture__space-atom' />
        <img src={darkPlanet} alt="Темная планета" className='picture__space-darkPlanet' />
        <img src={division} alt="Знак деления" className='picture__space-division' />
        <img src={plus} alt="Плюс" className='picture__space-plus' />
        <img src={balloon} alt="Воздушный шар" className='picture__space-balloon' />
        <img src={palette} alt="Палитра" className='picture__space-palette' />
        <img src={zero} alt="Ноль" className='picture__space-zero' />
        <img src={one} alt="Один" className='picture__space-one' />
        <img src={stars} alt="Звезды" className='picture__space-stars' />
      </div>
      <div className='picture__girl'>
        <img src={girl} alt="Девочка" className='picture__girl-img' />
        <img src={pen} alt="Кисть" className='picture__girl-pen' />
      </div>
    </div>
  )
}

export default Picture
