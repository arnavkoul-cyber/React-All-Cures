import React, { Component } from 'react';
import Heart from"../../assets/img/heart.png";
import Facebook from '../../assets/icon/facebook.svg'
import Instagram from '../../assets/icon/instagram.svg'
import Linkedin from '../../assets/icon/linkedin.svg'
import Twitter from '../../assets/icon/twitter.svg'
// import "@fortawesome/free-brands-svg-icons";
class Footer extends Component {
    render() {
        return(
            <div>
            <section class="footer">
         <div class="container">
            <div class="row">
               <div class="col-md-4 col-sm-4 col-sx-12">
                  <div class="footer-inner">
                     <h1>About us</h1>
                     <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue turpis sollicitudin nulla finibus dignissim. Curabitur eu urna sed risus tempor venenatis. Morbi quis libero at odio elementum scelerisque at nec libero. Integer quis magna nunc. Sed malesuada efficitur tellus, a posuere risus finibus vitae. Aenean eleifend lacinia consectetur. Donec nec feugiat sem, vitae gravida felis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas consectetur orci vel felis lacinia scelerisque. Praesent ut sollicitudin enim. Etiam facilisis sagittis diam, id sollicitudin risus varius non. Proin eget semper ipsum.</p>
                  </div>
               </div>
               <div class="col-md-2 col-sm-2 col-sx-12">
                  <div class="footer-inner">
                     <h1>Top Specialties</h1>
                     <ul>
                        <li>
                           <a href="/#"> Primary Care Doctor</a>
                        </li>
                        <li>
                           <a href="/#">Dermatologist</a>
                        </li>
                        <li>
                           <a href="/#">OB-GYN Dentist </a>
                        </li>
                        <li>
                           <a href="/#">Psychiatrist</a>
                        </li>
                        <li>
                           <a href="/#">Ear, Nose & Throat Doctor</a>
                        </li>
                        <li>
                           <a href="/#">Podiatrist</a>
                        </li>
                        <li>
                           <a href="/#">Urologist</a>
                        </li>
                        <li>
                           <a href="/#">Gastroenterologist</a>
                        </li>
                        
                        <li>
                           <a href="/#"> View all</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-3 col-sx-12">
                  <div class="footer-inner">
                     <h1>Discover</h1>
                     <ul>
                        <li>
                           <a href="/#">The Paper Gown</a>
                        </li>
                        <li>
                           <a href="/#">Stories for and about patients</a>
                        </li>
                        <li>
                           <a href="/#">The Script</a>
                        </li>
                        <li>
                           <a href="/#">Insights for doctors</a>
                        </li>
                        <li>
                           <a href="/#">Community Standards </a>
                        </li>
                        <li>
                           <a href="/#">Data and privacy </a>
                        </li>
                        <li>
                           <a href="/#">Verified reviews</a>
                        </li>
                     </ul>
                  </div>
               </div>
               <div class="col-md-3 col-sm-3 col-sx-12">
                  <div class="footer-inner">
                     <h1>Are you a Doctor or Health Service?</h1>
                     <p> List your practice on Zocdoc Become an API partner</p>
                     <div class="helth-app">
                        <h2>Get the Digi Healthcare App</h2>
                        <a href="/#" class="appBtn">App Store</a>
                        <a href="/#" class="appBtn">Google Play</a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
        
      </section>
      
      <div class="footer-bootm">
         <div class="container">
            <div class="row">
               <div class="col-md-4 col-sm-4 col-sx-12">
                  <div class="logo">
                     <a href="/#">
                        <img src={Heart} alt="All Cures Logo" /><span>All Cures</span>
                    </a>
                  </div>
               </div>
               <div class="col-md-4 col-sm-4 col-sx-12">
                  <div class="copyRight">
                     <p>All rights Reserved. Copyright @ 2020</p>
                  </div>
               </div>
               <div class="col-md-4 col-sm-4 col-sx-12">
                  <div class="socia-media-footer">
                     <ul>
                        <li>
                           <a href="/#">
                              <span>
                                 <img src={Facebook} alt="Facebook Link" height="30px" width="30px"></img>
                              </span> 
                              <span class="path1"></span>
                              <span class="path2"></span>
                           </a>
                        </li>
                        <li>
                           <a href="/#">
                              <span>
                                 <img src={Instagram} alt="Instagram Link" height="30px" width="30px"></img>
                              </span> 
                              <span class="path1"></span>
                              <span class="path2"></span>
                           </a>
                        </li>
                        <li>
                           <a href="/#">
                              <span>
                                 <img src={Linkedin} alt="LinkedIn Link" height="30px" width="30px"></img>
                              </span> 
                              <span class="path1"></span>
                              <span class="path2"></span>
                           </a>
                        </li>
                        <li>
                        <a href="/#">
                              <span>
                                 <img src={Twitter} alt="Twitter Link" height="30px" width="30px"></img>
                              </span> 
                              <span class="path1"></span>
                              <span class="path2"></span>
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
               <a href="/#" id="scroll"style={{display: "block"}} >
                   <span></span>
                </a>
             
            </div>
        </div>
    </div>
    </div>
        );
    }
}
export default Footer;