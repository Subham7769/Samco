import React from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import profile from '../Assets/default_profile.png'
import { FaAngleDown } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";




const Navbar = () => {
  return (
    <nav>
      <div>
        <div className='logo'>
          <img src={logo} alt="logo" />
        </div>
        <div>
            <ul className='navlist'>
                <li>Explore All MF Ranks</li>
                <li>Baskets</li>
                <li>My Investments</li>
                <li>Evaluate Portfolio</li>
                <li>NFO</li>
                <li>Systematic <FaAngleDown /></li>
                <li><FaSearch style={{fontSize:"1.5rem"}}/></li>
                <li><FaEye style={{fontSize:"1.5rem", color:"blue"}}/><div className='badge'>1</div></li>
                <li><button><FaFacebookF style={{color:"white"}}/>Connect</button></li>
            </ul>
        </div>
        <div>
            <div className='profiler'>
                <img src={profile} alt="profile_img" />
                <span>User Id <FaAngleDown /></span>
                <select name="" id="" style={{display:'none'}}>
                    <option value="">My Account</option>
                    <option value="">Log Out</option>
                </select>
                <select name="" id="" >
                    <option value="">English</option>
                    <option value="">Hindi</option>
                </select>
            </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar