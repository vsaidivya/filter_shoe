import React from 'react'
import './Recommended.css'

export default function Recommended(props) {
  return (
    <div>
      <p className='recom' > Recommended </p>
      <div className='brands'>
        <button onClick={props.handleClick} value="" >All Products</button>
        <button onClick={props.handleClick} value="Adidas" >Adidas</button>
        <button onClick={props.handleClick} value="Puma" >Puma</button>
        <button onClick={props.handleClick} value="Nike" >Nike</button>
        <button onClick={props.handleClick} value="Vans" >Vans</button>
      </div>
      </div>
  )
}