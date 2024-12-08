import React from 'react'
import './Category.css'
import Input from './Input'

export default function Price(props) {
  return (
    <div className='section' >
    <p className='heading'>Price</p>
    <label className='each-opt' >
        <input type='radio' name='test' value="" onChange={props.handleChange} />
        <span className='checkmark' ></span>All
      </label>
    <Input handleChange={props.handleChange} name="test" title="$0-$50" value="50" />
    <Input handleChange={props.handleChange} name="test" title="$50-$100" value="100" />
    <Input handleChange={props.handleChange} name="test" title="$100-$150" value="150" />
    <Input handleChange={props.handleChange} name="test" title="Over $150" value="200" />
  </div>
  )
}
