import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftBar from '../../Components/ProfileLeftSide/ProfileLeftBar';
import './Profile.css';

export default function Profile () {
  return (
    <div className="profileContainer">
        <Navbar />
        <ProfileLeftBar />
    </div>
  )
}
