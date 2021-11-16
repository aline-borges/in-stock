import React from 'react'
import './style.css'

const EditButton = (props) => {
  return(
    <button 
    id={props.id}
    className="edit-button"
    onClick={props.onClick}
    >
      <img 
      className="edit-icon" 
      src={props.src} 
      alt={props.alt} />
    </button>
  )
}

export default EditButton 
