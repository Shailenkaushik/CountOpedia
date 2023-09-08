import React from 'react'
import reactLogo from '../assets/react.png'
export default function Header() {
  return (
    <div className="py-2 pl-2" style={{broderBottom:" 1px solid #777 "}}>

        <img src={reactLogo} alt='' style={{height:"35px",verticalAlign:"top"}}></img>
        <span className='h2 pt-4 m-2 text-white' >
            By Shailen-CountOpedia
        </span>
        
    </div>
  )
}
