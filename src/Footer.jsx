import React from 'react'
import './Footer.css'
import razor from './Components/razor2.png'
import Facebook from './Components/Facebook.png'
import Instagram from './Components/Instagram.png'
import Linkedin from './Components/Linkedin.png'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
const Footer = props => {
  return (
    <div>
        <img className="divwithfooterdesign"  src={razor} alt="" srcset="" />
        <div className='footer-all'>
            <div className="footer">
                <div className='footer-div'>
                    <h1>Address</h1>
                    <p>36, Ijaoye Street, Casso</p>
                    <p>Alagbado, Lagos</p>
                    <p>Nigeria</p>
                </div>
                <div className='footer-div'>
                    <h1>Contact</h1>
                    <p> info@pushtechn.com</p>
                    <p></p>
                    <p>www.pushtechn.com</p>
                </div>
                <div className='footer-div'>
                    <h1>Phone</h1>
                    <p>+234 8037 3058 37</p>
                    <p>+234 8020 7871 69</p>
                    <p>+234 8028 0909 21</p>
                </div>
            </div>
            <div className="last-footer">
            <p>Copyright © 2022 PushTechn. All Rights Reserved</p>
            <div className="social">
                <a href="http://"><Tippy content='Facebook'><img className='Facebook' src="" alt="" srcset={Facebook} /></Tippy></a>
                <a href="http://"><Tippy content='Linkedin'><img className='Linkedin' src={Linkedin} alt="" srcset="" /></Tippy></a>
                <a href="http://"><Tippy content='Instagram'><img className='Instagram' src={Instagram} alt="" srcset="" /></Tippy></a>
            </div>
            </div>
        </div>
    </div>
  )
}


export default Footer
