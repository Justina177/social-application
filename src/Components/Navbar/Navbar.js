import React from 'react';
import './navbar.css';
import searchIcon from '../../images/search.png';
import Notifications from '../../images/bell.png';
import Message from '../../images/message.png';
import profile from '../../images/image1.jpg';

export default function Navbar() {
  return (
    <div className='mainNavbar'>
        <div className="logoContainer">
            <p>Social</p>
        </div>

        <div>
            <div className="searchInputContainer">
                <img src={`${searchIcon}`} className="searchIcon" alt="" />
                <input type="text" className="searchInput"placeholder='Search for Freinds' name="" id="" />
            </div>
        </div>

        <div className="iconsContainer">
            <img src={`${Notifications}`} className="Icons" alt="" />
            <img src={`${Message}`} className="Icons" alt="" />
            <div style={{display:"flex", alignItems:"center"}}>
                <img src={`${profile}`} className="profileImage" alt="" />
                <p style={{marginLeft:'5px', }}>Rachel</p>
            </div>
        </div>

    </div>
  )
}
