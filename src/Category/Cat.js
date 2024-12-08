import React from 'react'
import './Category.css'
import Input from './Input'

export default function Cat(props) {
  return (
    <div className='section' >
      <p className='heading' >Category</p>
      <label className='each-opt' >
          <input type='radio' name='test' value="" onChange={props.handleChange} />
          <span className='checkmark' ></span>All
        </label>
      <Input handleChange={props.handleChange} name="test" title="Sneakers" value="sneakers" />
      <Input handleChange={props.handleChange} name="test" title="Flats" value="flats" />
      <Input handleChange={props.handleChange} name="test" title="Heels" value="heels" />
      <Input handleChange={props.handleChange} name="test" title="Sandals" value="sandals" />
    </div>
    )
  }