import React from 'react'
import Innovative from './Innovative.png';
import Support from './Support.png'
import Team from './Team.png'
import './subservices.css'
import {FaArrowRight} from 'react-icons/fa';

const Subservices = () => {
  return (
    <>
      <div className="group">
        <div className='fl'>
            <div className="image1"><img src={Innovative} alt="" srcset="" /></div>
            <h1>Innovative Solutions</h1>
            <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
            <a href='#'><h2>Read More<FaArrowRight className='arrowright'/></h2></a>
        </div>

        <div className='fl mb'>
            <div className="image2"><img src={Team} alt="" srcset="" /></div>
            <h1>Professional Team</h1>
            <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
            <a href='#'><h2>Read More<FaArrowRight className='arrowright'/></h2></a>
        </div>

        <div className='fl'>
            <div className="image3"> <img src={Support} alt="" srcset="" /></div>
            <h1>27/7 Support</h1>
            <p>We bring the right people together to challenge established thinking and drive transform in 2020</p>
            <a href='#'><h2>Read More<FaArrowRight className='arrowright'/></h2></a>
            </div>
      </div>
    </>
  )
}

export default Subservices
