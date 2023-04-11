import React from 'react';
import './RightSide.css';
import ads from '../../images/ads.jpg';

export default function RightSide() {
  return (
    <div className="rightSide">
      <div className="rightContainer">
        <div className="adsContainer">
          <img scr={`${ads}`} className="adsimg" alt='' />
        </div>
        <div>
        <p style={{textAlign:"start", marginLeft:"10px", marginTop:"-20px"}}>CodeDemy</p>
        <p style={{textAlign:"start", marginLeft:"10px", fontSize:"12px", marginTop:"-16px"}}>Buy codedemy courses</p>
      </div>
      </div>
    </div>
  )
}
