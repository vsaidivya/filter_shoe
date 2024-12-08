import React from 'react'
import './Products.css'
import Shoe from './Shoe'

export default function Products(props) {
    const allshoes = props.shoes.map(eachshoe => <Shoe img={eachshoe.img} title={eachshoe.title} reviews={eachshoe.reviews} 
        prevPrice={eachshoe.prevPrice} newPrice={eachshoe.newPrice} company={eachshoe.company} color={eachshoe.color} category={eachshoe.category} />)
  return (
    <div className='all-shoes' >
    {allshoes}
    </div>
  )
}
