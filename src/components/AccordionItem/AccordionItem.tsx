import React from 'react'
import './AccordionItem.css'

const AccordionItem = ({ ...props }) => {
  return (
    <div className='accordion__item'>
      <p>{props.title}</p>

      <svg width="49" height="48" viewBox="0 0 49 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_957_71)">
          <circle r="24" transform="matrix(1 0 0.00130461 0.999999 24.9687 24)" fill="#FF652F" />
          <path d="M25.2243 35.0446C24.6333 35.045 24.1539 34.5668 24.1535 33.9766L24.1409 14.7383C24.1405 14.148 24.6193 13.6692 25.2104 13.6688C25.8014 13.6684 26.2808 14.1466 26.2812 14.7369L26.2938 33.9752C26.2942 34.5654 25.8154 35.0442 25.2243 35.0446Z" fill="white" />
          <path d="M14.6237 24.4715C14.6233 23.8813 15.1021 23.4024 15.6931 23.4021L34.9564 23.3895C35.5475 23.3891 36.027 23.8673 36.0273 24.4575C36.0277 25.0478 35.5489 25.5266 34.9578 25.527L15.6945 25.5396C15.1035 25.54 14.624 25.0618 14.6237 24.4715Z" fill="white" />
        </g>
        <defs>
          <clipPath id="clip0_957_71">
            <rect width="48" height="48" fill="white" transform="matrix(1 0 0.00130461 0.999999 0.937378 0)" />
          </clipPath>
        </defs>
      </svg>

    </div>
  )
}

export default AccordionItem
