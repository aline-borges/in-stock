import React from 'react'
import './style.css'

const Container = (props) => {
  return(
    <main className="main-container">
      {props.children}
    </main>
  )
}

export default Container 
