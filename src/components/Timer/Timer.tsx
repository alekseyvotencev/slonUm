import React, { useEffect, useState } from 'react'
import { ITimer } from '../../types/types';
import './Timer.css'

const Timer: React.FC<ITimer> = ({ endtime }) => {

  const getTimeRemaining = (endtime: Date) => {

    function getValidNumber(number: number) {
      if (number >= 0 && number < 10) return `0${number}`;
      else return `${number}`;
    }

    const msInDay = 24 * 60 * 60 * 1000;
    const msInHour = 60 * 60 * 1000;
    const msInMinute = 60 * 1000;

    const now = new Date();
    const timeRemaining = endtime.getTime() - now.getTime();

    const daysRemaining = getValidNumber(Math.trunc(timeRemaining / msInDay));
    const hoursRemaining = getValidNumber(Math.trunc((timeRemaining / msInHour) % 24));
    const minutesRemaining = getValidNumber(Math.ceil((timeRemaining / msInMinute) % 60));

    return { daysRemaining, hoursRemaining, minutesRemaining }
  }

  return (
    <div className='timer'>
      <div className='timer__number-container'>
        <div className='timer__number'>{getTimeRemaining(endtime).daysRemaining}</div>
        <span className='timer__text'>дней</span>
      </div>
      <span className='timer__colon'>:</span>
      <div className='timer__number-container'>
        <div className='timer__number'>{getTimeRemaining(endtime).hoursRemaining}</div>
        <span className='timer__text'>часов</span>
        <span className='timer__timezone'>по МСК</span>
      </div>
      <span className='timer__colon'>:</span>
      <div className='timer__number-container'>
        <div className='timer__number'>{getTimeRemaining(endtime).minutesRemaining}</div>
        <span className='timer__text'>минут</span>
      </div>
    </div>
  )
}

export default Timer
