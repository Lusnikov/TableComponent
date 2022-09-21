import React from 'react'

export default function Sorter({desc=false, asc=false, className, onClick=() => {}}) {
  return (
    <button className={className} onClick={onClick}>
        <svg style={{display: 'block',}} fill='black' xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
          {asc ? <path d="M0 21l12-18 12 18z"/> :    <path d="M12 6.605l8.263 12.395h-16.526l8.263-12.395zm0-3.605l-12 18h24l-12-18z" fill='black'/> }
       
        </svg>
        <svg style={{display: 'block'}}  xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
          {desc ? <path d="M24 3l-12 18-12-18z"/> : <path d="M12 17.395l-8.263-12.395h16.525l-8.262 12.395zm0 3.605l12-18h-24l12 18z"/>}
          
        </svg>
    </button>
  )
}
