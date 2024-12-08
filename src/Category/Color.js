import React from 'react'
import './Category.css'
import Input from './Input'

export default function Color(props) {
  return (
    <div className='section' >
      <p className='heading' >Color</p>
      <label className='each-opt' >
          <input type='radio' name='test' onChange={props.handleChange} value="" />
          <span className='checkmark' ></span>All
        </label>
      <Input handleChange={props.handleChange} name="test" title="White" value="white" color="white" />
      <Input handleChange={props.handleChange} name="test" title="Black" value="black" color="black" />
      <Input handleChange={props.handleChange} name="test" title="Red" value="red" color="black" />
      <Input handleChange={props.handleChange} name="test" title="Blue" value="blue" color="black" />
      <Input handleChange={props.handleChange} name="test" title="Green" value="green" color="black" />
    </div>
  )
}
