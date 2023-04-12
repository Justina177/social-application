import React from 'react';
import './RightSide.css';
// import ads from '../../images/ads.jpg';
import ads from '../../images/ads.jpg';
import image1 from "../../images/image3.jpg";
import image2 from "../../images/image2.jpg";
import image5 from "../../images/image5.jpg";
import image4 from "../../images/image4.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image1.jpg";
import img6 from '../../images/img6.jpg'

import addFriends from '../../images/add-user.png'

export default function RightSide() {
  return (
    <div className="rightSide">
      <div className="rightContainer">
        <div className='adsContainer'>
          <img src={`${ads}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
        <div className='adsContainer'>
          <img src={`${image1}`} className="adsimg" alt="" />
          <div>
            <p style={{ textAlign: 'start', marginLeft: '10px', marginTop: -20 }}>CodeDemy</p>
            <p style={{ textAlign: 'start', marginLeft: '10px', fontSize: "12px", marginTop: "-16px" }}>Buy codedemy course</p>
          </div>
        </div>
      </div>

      <div className='rightcontainer2'>
        <h3 style={{textAlign:"start" , marginLeft:"10px"}}>Suggested for you</h3>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image2}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Peter Obi</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Suggested for you</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image5}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Dan Eric</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Mike Peter</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image4}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Princess Me</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Nnoso Emeka</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image6}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Elon Musk</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Thomson</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image7}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Anthony</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Justina</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" , cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${image1}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Daniel park</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Patrick</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%", cursor:'pointer' }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        <div style={{marginTop:"-10px"}}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: "center" }}>
              <img src={`${img6}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Agela Nelson</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by Jason Jet</p>
              </div>
            </div>
            <div style={{ backgroundColor: "#aaa", padding: '10px', marginRight: 13, borderRadius: "50%" }}>
              <img src={`${addFriends}`} className="addfriend" alt="" />
            </div>
          </div>
        </div>
        

      </div>


    </div>
    

    
  )
}
