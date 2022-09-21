import React from 'react'

export default function Circle({color, width='20', className=''}) {
  const circleLength = width/2
  return (
    <>
        <svg 
            className={className}
            width={width}
            height={width}
            xmlns="http://www.w3.org/2000/svg" 
            fillRule="evenodd" 
            clipRule="evenodd"
            fill={color}
        >
                <circle  cx={circleLength} cy={circleLength} r={circleLength}/>
        </svg>
    </>
  )
}
