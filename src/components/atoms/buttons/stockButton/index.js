import React from 'react'
import './style.css'

export const StockButton = (props) => {
  return(
    <button 
    id={props.id}
    className="stock-button"
    onClick={props.onClick}
    >
      {props.text}
    </button>
  )
}

export default StockButton 
