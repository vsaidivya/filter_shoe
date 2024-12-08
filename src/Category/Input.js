import React from 'react'
import './Category.css'

export default function Input(props) {
  return (
      <label className='each-opt' >
          <input type='radio' value={props.value} onChange={props.handleChange} name={props.name} />
          <span className='checkmark' ></span>{props.title}
        </label>
  )
}
