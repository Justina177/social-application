import React from 'react';
import LeftSide from '../../Components/Leftside/LeftSide';
import MainPost from '../../Components/MainPostContainer/MainPost';
import Navbar from '../../Components/Navbar/Navbar';
import RightSide from '../../Components/Rightside/RightSide';
import './home.css'

export default function Home() {
  return (
    <div className="home">
      <Navbar />
      <div className="componentContainer">
        <LeftSide />
        <MainPost />
        <RightSide />

      </div>
    </div>
  )
}
