import React from 'react'
import './style.css'

const Button = (props) => {
  return(
    <button 
    id={props.id}
    className="button"
    onClick={props.onClick}
    >
      {props.text}
      <img 
      className="button-icon" 
      src={props.src} 
      alt={props.alt} />
    </button>
  )
}

export default Button 