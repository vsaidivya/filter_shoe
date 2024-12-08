import React from 'react'
import './Navbar.css'
import { CiSearch } from "react-icons/ci";
import { AiOutlineLike } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

export default function Navbar(props) {
  return (
    <div className='navbar' >
    <input type='text' placeholder='search your shoe' className='input-btn' onChange={props.search} value={props.value} />

   <div className='images'>
    <a href='' ><AiOutlineLike /></a>
    <a href='' ><CiShoppingCart /></a>
    <a href=''><IoPersonOutline /></a>
   </div>
   
    </div>
  )
}
