import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import {BiWorld} from 'react-icons/bi'
import {AiOutlineSearch} from 'react-icons/ai'
import { Link } from "react-router-dom";



function Navbar() {
 

  return (
    <div className='navbar'>
      <Link to={"/"}>
      <img src={logo} alt="" />
      </Link>
        <ul className='navbar__collection'>
            <Link to={"/"}>
            <li>Home</li>
            </Link>
            <Link to={"/product"}>
            <li>Products </li>
            </Link>
            <Link to={"/service"}>
            <li>Service</li>
            </Link>
            <Link to={"/traning"}>
            <li>Training</li>
            </Link>
        </ul>
        <button>Log in</button>
        <button>Sign up</button>
        <BiWorld className='navbar__icon' />
        <AiOutlineSearch className='navbar__icon' />
    </div>
  )
}

export default Navbar