import React from 'react';
import './ContentPost.css';
import img9 from '../../images/image9.jpg';
import imageIcon from "../../images/gallery.png"
import emojiIcon from "../../images/cat-face.png"
import VideoIcon from "../../images/video.png"


export default function ContentPost() {
  return (
    <div>
      <div className='ContentUploadContainer'>
        <div style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img src={`${img9}`} className="profileimage" alt="" />
          <input type="text" className='contentWritingpart' placeholder='Write your real thought.....' />
        </div>
        <div style={{ display: 'flex', marginLeft: '10px'}}>
          <div>
            <img src={`${imageIcon}`} className="icons" alt="" />
            <img src={`${emojiIcon}`} className="icons" alt="" />
            <img src={`${VideoIcon}`} className="icons" alt="" />
            <button style={{marginLeft:"35px", paddingLeft:"20px", paddingRight:"20px", paddingTop:6, paddingBottom:6 , border:"none" , backgroundColor:"green" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button>
            {/* <button style={{marginLeft:"350px" , paddingLeft:"20px" , paddingRight:"20px" , paddingTop:6 , paddingBottom:6 , border:"none" , backgroundColor:"black" , color:"white" , borderRadius:"5px" , cursor:"pointer"}}>Post</button> */}
          </div>       
        </div>
        </div>
      </div>
  )
}
