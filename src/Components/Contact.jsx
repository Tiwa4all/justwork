// import axios from 'axios';
import { useState } from 'react';
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css'
import cuscare from './cuscare.png'

const Contact = () => {
    const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_hku3ces', 'template_f7darjh', form.current, 'n9KNw7QkUVJQ_tVCM')
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

    // const [formData, setFormdata]= useState({name: "", email: "", phone: "", message: ""});
    // const handleChange =(e) => {
    //     const name = e.target.name;
    //     const value = e.target.value;
    // setFormdata({...formData, [name]: value})
    // }
    // const handleSubmit=(e)=>{
    //     e.preventDefault()
    //     // console.log(formData)
    //     // send from data to the server
    //     axios.post('/send-email', formData)
    //     .then((response) => {
    //       console.log('Email sent successfully!', response.formData);
    //     })
    //     .catch((error) => {
    //       console.error('Error sending email:', error);
    //     });
    // };

//     const express = require('express');
// const nodemailer = require('nodemailer');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 5000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// const transporter = nodemailer.createTransport({
//   service: 'Gmail',
//   auth: {
//     user: 'timightywahab@gmail.com', // Your Gmail email address
//     pass: 'timiifunaya3', // Your Gmail password
//   },
// });

// app.post('/send-email', (req, res) => {
//   const { name, email, phone, message } = req.body;

//   const mailOptions = {
//     from: email, // Use the customer's email as the "from" address
//     to: 'your-email@gmail.com', // Your email address
//     subject: 'New Contact Form Submission',
//     text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}nMessage: ${phone}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ message: 'Email not sent' });
//     } else {
//       console.log('Email sent:', info.response);
//       res.json({ message: 'Email sent successfully' });
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });




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
                {/* <form method='post' className='form'onSubmit={handleSubmit}>
                    <input type="text" name='name' id="" placeholder='Enter name' onChange={handleChange} value={formData.name}/>
                    <input type="email" name='email' id="" placeholder='example@gmail.com'value={formData.email} onChange={handleChange}  />
                    <input type="phone" name='phone'id="" placeholder='+234' onChange={handleChange} value={formData.phone} />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='type here ...'value={formData.message} onChange={handleChange}></textarea>
                    <button className='btnsend' type='submit'>SEND</button>
                </form> */}
                <form ref={form} className='form'onSubmit={sendEmail}>
                    <input type="text" name='name' id="" placeholder='Enter name'/>
                    <input type="email" name='email' id="" placeholder='example@gmail.com'  />
                    <input type="phone" name='phone'id="" placeholder='+234' />
                    <textarea name="message" id="" cols="30" rows="10" placeholder='type here ...'></textarea>
                    <button onClick={() => {alert('Message Sent Successfully ✅ ');}} className='btnsend' value="Send" type='submit'>SEND</button>
                </form>
               
    {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}


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