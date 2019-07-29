import React from 'react';
import {  Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './styles.css';
class AboutUs extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div class="services">

    <div class="service-container sc1">
        <div class="service-icons">
            <svg class="svg-strategie">
                <path class="str-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M18.5,5.8c-7.7,0-14.4,5.6-15.9,13.2"></path>
                <path class="str-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M25.2,28.8h-5.6c-0.3,0-0.5-0.2-0.5-0.5V11.5c0-0.3,0.2-0.5,0.5-0.5 h5.6c0.3,0,0.5,0.2,0.5,0.5v16.8C25.7,28.6,25.5,28.8,25.2,28.8L25.2,28.8z"></path>
                <path class="str-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M16,28.8h-5.6c-0.3,0-0.5-0.2-0.5-0.5v-9.6c0-0.3,0.2-0.5,0.5-0.5H16 c0.3,0,0.5,0.2,0.5,0.5v9.6C16.5,28.6,16.3,28.8,16,28.8L16,28.8z"></path>
                <path class="str-path4" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M6.8,28.8H1.2c-0.3,0-0.5-0.2-0.5-0.5v-4.4c0-0.3,0.2-0.5,0.5-0.5h5.6 c0.3,0,0.5,0.2,0.5,0.5v4.4C7.4,28.6,7.1,28.8,6.8,28.8L6.8,28.8z"></path>
                <path class="str-path5" fill="none" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-miterlimit="10" d="M15.3,1.4l4.1,4.1c0.2,0.2,0.2,0.5,0,0.7 l-4.1,4.1"></path>
            </svg>
            <svg class="arrow-right ar1" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-strategie">History</h1>
        <p class="p-strategie">There are several things, that I can do until 03.00 AM. One of them is playing board games. I really enjoy playing different games, not only Settlers of Catan. Also I am a mom with kids under 3,  which makes it hard to be a boerdgamer.You can't go to bars or board game shops. So the only way to play new games is actually buying new games! Too expensive of a hobby! So I thought it would be a great idea to have a service for renting games! And here you go!</p>
    </div>

    <div class="service-container sc2">
        <div class="service-icons">
            <svg class="svg-design">
                <path class="ma-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M22.7,35.6H1.4c-0.4,0-0.8-0.3-0.8-0.8V1.4c0-0.4,0.3-0.8,0.8-0.8 h21.3c0.4,0,0.8,0.3,0.8,0.8v33.5C23.5,35.3,23.1,35.6,22.7,35.6L22.7,35.6z"></path>
                <path class="ma-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M19.7,26.5H4.4c-0.4,0-0.8-0.3-0.8-0.8V6.4C3.7,6,4,5.7,4.4,5.7h15.2 c0.4,0,0.8,0.3,0.8,0.8v19.3C20.4,26.1,20.1,26.5,19.7,26.5L19.7,26.5z"></path>
                <circle class="ma-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="12.1" cy="31" r="1.8"></circle>
            </svg>
            <svg class="arrow-right ar2" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-design">About</h1>
        <p class="p-design">We provide a service for renting games! We can deliver games to your place or you can pick up them from a store! We are also  more than happy to explain you the rules!  Return to us directly or leave in a participating bar! </p>
    </div>

    <div class="service-container sc3">
        <div class="service-icons">
            <svg class="svg-design">
                <path class="de-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M35.3,1.1L33,1.5c-0.2,0-0.4,0.1-0.5,0.3L15.4,18.1 c-0.2,0.2-0.3,0.4-0.3,0.7c0,0,0,0,0,0c0,0,0,0-0.1,0c-0.3,0-0.6,0.2-0.7,0.4l-6,6.8c-0.2,0.2-0.2,0.5-0.2,0.7 c-0.4-0.2-0.9-0.3-1.4-0.3c-1.1,0-2.5,0.5-3.3,1.3c-1.2,1.2-1.1,4.4-2.4,6.8c-0.2,0.3,0,0.7,0.3,0.9c0.2,0.2,0.4,0.3,0.7,0.3 c0.1,0,0.1,0,0.2,0l3-0.9c0.7-0.2,3-0.8,3.8-1.6c1.2-1.2,1.4-3.2,1-4.7c0.1,0,0.1,0,0.2,0c0.2,0,0.4-0.1,0.6-0.2l6.8-5.8 c0.2-0.2,0.4-0.4,0.4-0.7c0,0,0,0,0-0.1c0,0,0,0,0,0h0c0.3,0,0.5-0.1,0.7-0.3L35.3,4.5c0.1-0.1,0.2-0.3,0.3-0.5L36,1.7 C36.1,1.4,35.7,1,35.3,1.1z"></path>
            </svg>
            <svg class="arrow-right ar3" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-design">Design</h1>
        <p class="p-design">This website was desighned with an awesome free and open-source CSS framework, called bootstrap. Special thanks go to Mark Otto and Jacob Thornton - original authors of this framework!                                                                                        </p>
    </div>


    <div class="service-container sc4">
        <div class="service-icons">
            <svg class="svg-ux">
                <path class="ux-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M21.3,35.8c-0.1,0-0.3,0-0.4-0.1c0,0-0.1-0.1-0.1-0.1 c-0.1,0-0.3-0.2-0.6-0.4c-1.3-0.9-4.4-3.1-6.5-4.7C6,24.5,2,20.1,1.2,17c-0.4-1.1-0.6-2.4-0.6-3.7c0-3.4,1.2-6.7,3.5-9.1 C6.3,2.2,9,1,11.9,1h0c3.6,0,6.9,1.6,9,4.4c2.1-2.9,5.3-4.6,8.9-4.7l0.2,0c6.1,0,11.2,5.4,11.3,12.1c0,1.3-0.2,2.5-0.5,3.7 c-0.6,3.1-4.7,7.7-12,13.8c-2.9,2.4-5.3,4.2-7,5.3C21.6,35.7,21.4,35.8,21.3,35.8L21.3,35.8z"></path>
                <path class="ux-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M29.9,6.2L29.9,6.2c3.3,0,6,3,6,6.7c0,0.7-0.1,1.5-0.3,2.2"></path>
            </svg>
            <svg class="arrow-right ar4" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-ux">Partnership</h1>
        <p class="p-ux">We work with two big board game shops in Seattle: Blue Highway Games and Mox Boarding House! If you want join us, don't wait for better moment! Best moment is just now! </p>
    </div>

    <div class="service-container sc5">
        <div class="service-icons">
        <svg class="svg-marketing">
            <path class="ma-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M22.7,35.6H1.4c-0.4,0-0.8-0.3-0.8-0.8V1.4c0-0.4,0.3-0.8,0.8-0.8 h21.3c0.4,0,0.8,0.3,0.8,0.8v33.5C23.5,35.3,23.1,35.6,22.7,35.6L22.7,35.6z"></path>
            <path class="ma-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" d="M19.7,26.5H4.4c-0.4,0-0.8-0.3-0.8-0.8V6.4C3.7,6,4,5.7,4.4,5.7h15.2 c0.4,0,0.8,0.3,0.8,0.8v19.3C20.4,26.1,20.1,26.5,19.7,26.5L19.7,26.5z"></path>
            <circle class="ma-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="12.1" cy="31" r="1.8"></circle>
        </svg>
            <svg class="arrow-right ar5" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-marketing">App</h1>
        <p class="p-marketing">For our client's convinience we developed an application, which you can  download for free from your  App Store! This app was built with React Native!  Here you will find a link: Use it and enjoy it!                                                                                                                                                                           </p>
    </div>

    <div class="service-container sc6">
        <div class="service-icons">
            <svg class="svg-dev">
                <circle class="dev-path1" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="6" cy="27.5" r="4.9"></circle>
                <circle class="dev-path2" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="20.3" cy="6" r="4.9"></circle>
                <circle class="dev-path3" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" cx="34.6" cy="27.5" r="4.9"></circle>
                <line class="dev-path4" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" x1="22.9" y1="10.3" x2="32" y2="23.1"></line>
                <line class="dev-path5" fill="none" stroke="#000000" stroke-width="1.5" stroke-miterlimit="10" x1="17.7" y1="10.3" x2="8.5" y2="23.2"></line>
            </svg>
            <svg class="arrow-right ar6" preserveAspectRatio="none">
                <path fill-rule="evenodd" clip-rule="evenodd" stroke-width="1.5" fill="none" stroke="#000000" stroke-miterlimit="10" d="M0.5,0l60,91.3L0.5,182"></path>
            </svg>
            <div class="diamond-narrow"></div>
        </div>
        <h1 class="h1-dev">Contact</h1>
        <p class="p-dev">If you have any questions or suggestions, please let us know!
        <li>Email: mariiapopovych@gmail.com</li>
        <li>Phone: +1(206) 476 .. .. </li>
        <li> Linkedin </li>
        Happy to hear from you!
         </p> </div>


</div>
    );
  }
}



export default AboutUs;
