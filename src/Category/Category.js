import React from 'react'
import Cat from './Cat'
import Price from './Price'
import Color from './Color'

export default function Category(props) {
  return (
    <div>
      <div><Cat handleChange={props.handleChange} /></div>
      <div><Price handleChange={props.handleChange} /></div>
      <div><Color handleChange={props.handleChange} /></div>
    </div>
  )
}
