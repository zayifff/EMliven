import React, { useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
const Navbar = ({setShowLogin}) => {

const [menu,setMenu] = useState("Home");

  return (
    <div className='navbar'>
        <Link to= '/'><img src={assets.Emlogo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("Home")} className={menu==="Home"?"active": ""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("Find Events")} className={menu=="Find Events"?"active": ""}>Find Events</a>
            <a href='#explore-menu' onClick={()=>setMenu("Create Events")} className={menu=="Create Events"?"active": ""}>Create Events</a>
            <a href='#footer' onClick={()=>setMenu("Help")} className={menu=="Help"?"active": ""}>Help</a>
            <Link to ='/aboutus' onClick={()=>setMenu("About Us")} className={menu=="About Us"?"active": ""}>About Us</Link>
            <Link to ='' onClick={()=>setMenu("Account")} className={menu=="Account"?"active": ""}>Account</Link>
        </ul>
      <div className="navbar-right">
        <div className="navbar-purchase-icon">
          <Link to='/cart'><img src={assets.purchase} alt="" /></Link>
        </div>
      <button onClick={()=>setShowLogin(true)} className='btn'>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar
