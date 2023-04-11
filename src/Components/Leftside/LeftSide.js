import React from 'react';
import './LeftSide.css';
import image from '../../images/image2.jpg';
import image1 from '../../images/image1.jpg';
import image2 from '../../images/image2.jpg';
import image3 from '../../images/image3.jpg';
import image6 from '../../images/image6.jpg';
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';
import img6 from '../../images/img6.jpg';
import img7 from '../../images/img7.jpg';
import img8 from '../../images/img8.jpg';
import img9 from '../../images/img9.jpg';


export default function LeftSide() {
  return (
    <div className='leftSide'>
      <div className="notificationsContainer">
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <p style={{marginLeft:"-14px"}}>Notifications</p>
          <p style={{ color: '#aaa', marginLeft:"40px"}}>See All</p>
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image1}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Jasson like your post</p>
          <img src={`${img6}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Mike commented on your post</p>
          <img src={`${image1}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Eric shared your post</p>
          <img src={`${image2}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Thomson like your post</p>
          <img src={`${image3}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Jackson commented on your post</p>
          <img src={`${image6}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Patrick tagged you on a post</p>
          <img src={`${image1}`} className="likeImage" alt="" />
        </div>
        <div style={{display:"flex", alignItems:"center", marginTop:"-10px"}}>
          <img src={`${image}`} className="notificationImg" alt="" />
          <p style={{marginLeft: "5px", color:"#aaa", fontSize:13, textAlign:'start', width:'120px'}}>Nnoso like your post</p>
          <img src={`${image2}`} className="likeImage" alt="" />
        </div>
      </div>    

      <div className="notificationsContainer">
        <div style={{ display: 'flex', justifyContent: 'space-around'}}>
          <p style={{marginLeft:"-20px"}}>Explore</p>
          <p style={{ color: '#aaa', marginLeft:"40px"}}>See All</p>
        </div>
        <div>
          <img src={`${img2}`} className="exploreImage" alt="" />
          <img src={`${img3}`} className="exploreImage" alt="" />
          <img src={`${img6}`} className="exploreImage" alt="" />
          <img src={`${img4}`} className="exploreImage" alt="" />
          <img src={`${img5}`} className="exploreImage" alt="" />
          <img src={`${img9}`} className="exploreImage" alt="" />
          <img src={`${img8}`} className="exploreImage" alt="" />
          <img src={`${img7}`} className="exploreImage" alt="" />
          <img src={`${img1}`} className="exploreImage" alt="" />
        </div>
      </div>
    
    </div>
  )
}
