// import backgroundpicture from './dev2.jpg'
// 'https://crystaliaglass.com/wp-content/uploads/2019/11/image-min.jpg'
import Fade from 'react-reveal/Fade';
import cover from './imagecover.jpg'
import './Section1.css'
const Section1 = () => {
  return (
    <div id='Home'> 
        <div className="cll">
          <Fade left big cascade>
          <h1>TECH & SOFTWARE COMPANY</h1>
          </Fade>
          <p>BRINGING YOUR DREAMS TO REALITY</p>
          <button className='btu'type="submit">Learn More</button>
        </div>
      <img style={{width: '100%', height: '100%'}} src={cover} alt="" srcset="" />
    </div>
  )
}

export default Section1
