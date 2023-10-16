import './Aboutpage.css';
import tim from './tim2.jpg'
import Ola from './Ola.jpg'
import Rex from './Rexx.PNG'
import Tochukwu from './Tochukwu.jpg';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom';
import dev1 from './f.jpg'
const Aboutuspage = () => {
  return (
    <div className="">
      <div className='menupage'>
        <h1>About Us</h1>
        <div className='mp2'>
          <Link to='/' className='abthome'><p>Home</p></Link>
          <p className='dashh'>|</p>
          <p className='abt'>About Us</p>
        </div>
      </div>
      <div className="team">
        <div className="mtd">
          <h1>Meet Our Team</h1>
          <p>Some of the more rewarding projects we have had the honour to be involved in, started with simple ideas and grew profitable businesses from the ground up.</p>
        </div>
        <div className='teamfaces'>
          <ScrollAnimation className="teamf firstimg" animateIn="bounceInDown" initiallyVisible={true} duration={1.7} delay={1.0}>
              <div className="teampic"><img src={Ola} alt="" srcset="" /></div>
              <h1>Olaonipekun Wahab</h1>
              <p>CEO, PUSHTECHN</p>
          </ScrollAnimation>
          <ScrollAnimation className="teamf secondimgg" animateIn="bounceInUp" initiallyVisible={true} duration={1.7} delay={1.0}>
              <div className="teampic"><img src={Tochukwu} alt="" srcset="" /></div>
              <h1>Tochukwu Okaforb</h1>
              <p>Snr. Developer</p>
          </ScrollAnimation>
            <ScrollAnimation className="teamf thirdimgg" animateIn="bounceInDown" initiallyVisible={true} duration={1.7} delay={1.0}>
              <div className="teampic"><img src={Rex} alt="" srcset="" /></div>
              <h1>Rex Chukbuikem</h1>
              <p>CEO, PUSHTECHN</p>
            </ScrollAnimation>
            <ScrollAnimation className="teamf fourthimgg" animateIn="bounceInUp" initiallyVisible={true} duration={1.7} delay={1.0}>
              <div className="teampic"><img src={tim} alt="" srcset="" /></div>
              <h1>Oluwatimilehin Wahab</h1>
              <p>Web Developer</p>
            </ScrollAnimation>
        </div>
      </div>
      
        <div className="aboutuspage">
          <div className="all" id='aboutus'>
              <img src={dev1} alt="" srcset="" />
            <div className="notCarton">
              <h1>Who Are We?</h1><hr/>
              <p>Puchtechn is your number one Nigerian solution driven information technology Company. With us, your
                  project is handled by professionals with several years of experience. ‘’Yes’’, is our Language. Meaning
                  we do not have impossibilities. Over the years, we have been known for our prompt ability to make
                  impossibilities possible. Coding languages are dynamically used, making your business not only real but
                    also workable, unique and attractive hence bringing your dreams to reality.
              </p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Aboutuspage
