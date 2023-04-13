import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileLeftBar from '../../Components/ProfileLeftSide/ProfileLeftBar';
import ProfileMainPost from '../../Components/ProfileMainPost/ProfileMainPost';
import ProfileRightBar from '../../Components/ProfileRightSide/ProfileRightBar';
import './Profile.css';

export default function Profile () {
  return (
    <div className="profileContainer">
        <Navbar />
        <div className="profilebar">
        <ProfileLeftBar />
        <ProfileMainPost />
        <ProfileRightBar />
        </div>
    </div>
  )
}
