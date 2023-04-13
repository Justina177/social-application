import React from 'react';
import './ProfileRightBar.css';
// import ads from "../../images/ads.jpg";
import image1 from "../../images/image3.jpg";
import image2 from "../../images/image2.jpg";
import image5 from "../../images/image5.jpg";
import image4 from "../../images/image4.jpg";
import image6 from "../../images/image6.jpg";
import image7 from "../../images/image1.jpg";
import addFriends from "../../images/add-user.png";


export default function ProfileRightBar() {
  return (
    <div className='Profilerightbar'>
      <div className='profilerightcontainer'>
        <h3>Friend Request</h3>
        <div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image1}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>John Adams want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"#50aa13", color:"white", borderRadius:"10px", mouseHover:'green'}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"red", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
          </div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image2}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>Eddy Johnson want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"#50aa13", color:"white", borderRadius:"10px"}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"red", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
          </div>
          <div>
             <div style={{display:'flex' , alignItems:"center" , marginLeft:10 , cursor:"pointer"}}>
              <img src={`${image5}`} className="Friendsimage" alt="" />
              <p style={{textAlign:"start"  , marginLeft:"10px"}}>Robbin Clark want to make you friends</p>
            </div>
            <div style={{display:"flex" , justifyContent:'space-around'}}>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"#50aa13", color:"white", borderRadius:"10px"}}>Accept</button>
              <button style={{paddingLeft:"30px" , paddingRight:"30px" , paddingTop:5 , paddingBottom:5 , border:"none" , backgroundColor:"red", color:"white", borderRadius:"10px"}}>Deny</button>
            </div>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Angela</p>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Jean Ad</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Janet</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Kenny</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Benson mark</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>El-Hannah</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
              <img src={`${image1}`} className="Profileimage" alt="" />
              <div>
                <p style={{ marginLeft: "10px" , textAlign:'start' }}>Nathan Kim</p>
                <p style={{ marginLeft: "10px" , textAlign:'start' , marginTop:"-16px" , fontSize:"11px" , color:"#aaa" }}>Followed by suman yo</p>
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
