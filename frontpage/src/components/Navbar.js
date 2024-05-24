import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from './AuthProvider'

export default function Navbar() {
  const auth=useAuth()
  const navigate=useNavigate()
  return (
  
    <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/feeds">Feeds</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/contact">Contact</NavLink>
        {auth.user && <NavLink to='/profile'>Profile</NavLink>}
        {auth.user && <NavLink to='/buy'>Place Order</NavLink>}
       {!auth.user && <NavLink to="/login">Login</NavLink>}
        {!auth.user && <NavLink to="/signup">Signup</NavLink>}
    </nav>
  )
}
