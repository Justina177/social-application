import React from 'react';
import './ProfileLeftBar.css';
// import image from "../../images/Profile.png";
import image1 from "../../images/image1.jpg";
import image2 from "../../images/image2.jpg"
import image3 from "../../images/image3.jpg";
import image4 from "../../images/image4.jpg"
import image5 from "../../images/image5.jpg";
import image6 from "../../images/image6.jpg"

export default function ProfileLeftBar() {
  return (
    <div className='ProfileLeftbar'>
                              <div className='NotificationsContainer'>
                                        <img src={`${image5}`} className="ProfilepageCover" alt="" />
                                         <div style={{display:'flex' , alignItems:'center' , marginTop:-30}}>
                                                  <img src={`${image2}`} className="Profilepageimage" alt="" />
                                                  <div>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:'start'}}>Chris </p>
                                                    <p style={{marginLeft:6 , marginTop:20 , color:"black" , textAlign:"start"  , fontSize:11}}>Software Developer</p>
                                                  </div>
                                         </div>
                                         <div style={{display:'flex' , justifyContent:'space-between'}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Profile Views</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>76,876</p>
                                         </div>

                                         <div style={{display:'flex' , justifyContent:'space-between' , marginTop:-20}}>
                                                  <p style={{color:"black", marginLeft:20 , fontSize:"14px"}}>Friends</p>
                                                  <p style={{color:"black" , marginRight:20 , fontSize:"12px" , marginTop:17}}>4,209</p>
                                         </div>
                                         <div style={{marginTop:-20}}>
                                                  <h5 style={{color:"black", marginLeft:10 , fontSize:"14px" , marginRight:30, marginTop:30 , textAlign:"start"}}>User bio</h5>
                                                  <p style={{color:"#aaae"  , fontSize:"12px" , marginTop:-20 , textAlign:"start" , marginLeft:"10px"}}>Nothing comes as an accomplishment instantly. Success does not come overnight. Patience is the key!. Remember great things take time.</p>
                                         </div>
                                         <button style={{width:"100%" , paddingTop:7 , paddingBottom:7 , border:"none" , backgroundColor:"green" , color:"white"}}>Edit Bio</button>
                                        
                              </div>

                              <div className='NotificationsContainer'>
                                <h3>Your frineds</h3>
                                <div style={{display:"flex" , justifyContent:'space-between'}}>
                                        <p style={{marginLeft:10}}>Friends</p>
                                        <p style={{marginRight:10 , color:"#aaa"}}>See all</p>
                                </div>
                                <div style={{display:'flex' , flexWrap:"wrap" , marginLeft:5}}>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image2}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Dan gAN</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image1}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Samuel</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image5}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Usher</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image3}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Dennis</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image6}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Success</p>
                                        </div>
                                        <div style={{marginLeft:4}}>
                                                  <img src={`${image4}`} className="friendimage" alt="" />
                                                  <p style={{marginTop:-2}}>Patience</p>
                                        </div>
                                        
                                        
                                </div>
                              </div>

                    </div>
  )
}
