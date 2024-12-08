import React from "react";
import Navbar from "./Navbar/Navbar";
import Products from "./Products/Products";
import './App.css'
import Category from "./Category/Category";
import Recommended from "./Recommended/Recommended";
import data from "./data";


export default function App(){


  //based on input
  const [input,setinput] =React.useState("")

  function handleinput(event){
    setinput(event.target.value)
  }

  const filtereditems = data.filter(product=> 
   (product.title.toLocaleLowerCase()).indexOf(input.toLocaleLowerCase())!==-1
  )


   //based on category(all sidebars)

  const [selcategory,setselcategory] = React.useState(null)

  function handleChange(event){
    setselcategory(event.target.value)
    console.log("radioclick")
    console.log(selcategory)
  }

  //based on recommended

  function handleClick(event){
    setselcategory(event.target.value)
  }

  function filterdata(products,selected,input){
    let filteredshoes = products
    if(input){
      filteredshoes = filtereditems
    }

    if(selected){
      filteredshoes = filteredshoes.filter(product => {
        return (product.company === selected || 
          product.color === selected || 
          product.prevPrice === selected || 
          product.newPrice === selected || 
          product.category === selected)
      })
    }

    return filteredshoes
  }

  const result = filterdata(data,selcategory,input)

  return (
    <div >
      <Navbar search={handleinput} value={input} />
      <div className="body">
      <div className="Category"><Category handleChange={handleChange} /></div>
      <div className="main-page" >
      <div className="Recommended" ><Recommended handleClick={handleClick} /></div>
        <div className="Products"><Products shoes={result} /></div>
      </div>
      </div>
    </div>
  )
}