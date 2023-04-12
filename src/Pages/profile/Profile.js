import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftBar from '../../Components/ProfileLeftSide/ProfileLeftBar';
import ProfileRightBar from '../../Components/ProfileRightSide/ProfileRightBar';
// import MainPost from '../../Components/MainPostContainer/MainPost';
import './Profile.css';

export default function Profile () {
  return (
    <div className="profileContainer">
        <Navbar />
        <div className="profilebar">
        <ProfileLeftBar />
        <ProfileRightBar />
        </div>
    </div>
  )
}
