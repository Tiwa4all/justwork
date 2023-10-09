import React from 'react'
import './Contact.css'
import cuscare from './cuscare.png'

const Contact = () => {
  return (
    <div className='cgp'>
        <div className="boxcnt">
            <div className="boxcontent">
                <div className="flexcuscare">
                    <div className="text">
                        <p className='textp1'>PushTechn Technology Company</p>
                        <h1>Contact Us</h1>
                        <p className='textp2'>Don't hesitate to ask every thing about us</p>
                    </div>
                    <div className="cuspic"><img src={cuscare} alt="" srcset="" /></div>
                </div>
                <form action="" className='form'>
                    <input type="text" name='text' placeholder='Enter name'  />
                    <input type="email" name='email' placeholder='example@gmail.com'  />
                    <input type="phone" name='phone' placeholder='+234'  />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='type here ...'></textarea>
                    <button className='btnsend'>SEND</button>
                </form>
            </div>
        </div>
        
        <div className="allback">
            <div className="backg1"></div>
            <div className="backg2"></div>
        </div>
    </div>

  )
}

export default Contact