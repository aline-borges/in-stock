import React from 'react'
import './style.css'

const Input = (props) => {
  return(
    <div className="product-attribute">
      <label>
        {props.attribute}
      </label>
      <input 
      className="product-value"
      type={props.type}
      placeholder={props.placeholder}
      readOnly={props.readOnly}
      onChange={props.onChangeText}
      name={props.name}
      value={props.value}
      required={props.required}
      />
    </div>
  )
}

export default Input 
