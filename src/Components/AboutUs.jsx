import './Aboutpage.css'
// 'https://secureservercdn.net/50.62.174.75/f4x.a17.myftpupload.com/wp-content/uploads/2022/04/ola123-1-1.png?time=1663750396'
import ScrollAnimation from 'react-animate-on-scroll';
const image1 ='https://th.bing.com/th/id/OIP.8wL6m5e-1mazijUco7ciFwHaI1?pid=ImgDet&rs=1';
const AboutUs = () => {
  return (
    <ScrollAnimation className='' animateIn="fadeInLeft slower" duration={1.2} delay={0.3}>
      <div className="all" id='aboutus'>
          <img src={image1} alt="" srcset="" />
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
    </ScrollAnimation>
  )
  //  const { background, rotateZ } = useSpring({
  //   from: {
  //     background: '#46e891',
  //     rotateZ: 0,
  //   },
  //   to: {
  //     background: '#277ef4',
  //     rotateZ: 225,
  //   },
  //   config: {
  //     duration: 2000,
  //     easing: easings.easeInOutQuart,
  //   },
  //   loop: { reverse: true },
  // })

  // return (
  //   <animated.div
  //     style={{ background, width: 120, height: 120, borderRadius: 16, rotateZ }}
  //   />
  // )
}

export default AboutUs
