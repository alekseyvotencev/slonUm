import React, { useEffect, useState } from 'react'
import { ITimer, MsInTime } from '../../types/types';
import { getTimeRemaining } from '../../utils/time';
import './Timer.css'

const Timer: React.FC<ITimer> = ({ endtime }) => {

  const [daysRemaining, setDaysRemaining] = useState(getTimeRemaining(endtime).daysRemaining);
  const [hoursRemaining, setHoursRemaining] = useState(getTimeRemaining(endtime).hoursRemaining);
  const [minutesRemaining, setMinutesRemaining] = useState(getTimeRemaining(endtime).minutesRemaining);

  useEffect(() => {
    if (getTimeRemaining(endtime).difference > 0) {
      setInterval(() => {
        setMinutesRemaining(getTimeRemaining(endtime).minutesRemaining)
      }, MsInTime.MS_IN_MINUTE);
      setHoursRemaining(getTimeRemaining(endtime).hoursRemaining);
      setDaysRemaining(getTimeRemaining(endtime).daysRemaining);
    } else {
      setMinutesRemaining('00');
      setHoursRemaining('00');
      setDaysRemaining('00');
    }
  }, [minutesRemaining])

  return (
    <div className='timer'>
      <div className='timer__number-container'>
        <div className='timer__number'>{daysRemaining}</div>
        <span className='timer__text'>дней</span>
      </div>
      <span className='timer__colon'>:</span>
      <div className='timer__number-container'>
        <div className='timer__number'>{hoursRemaining}</div>
        <span className='timer__text'>часов</span>
        <span className='timer__timezone'>по МСК</span>
      </div>
      <span className='timer__colon'>:</span>
      <div className='timer__number-container'>
        <div className='timer__number'>{minutesRemaining}</div>
        <span className='timer__text'>минут</span>
      </div>
    </div>
  )
}

export default Timer
