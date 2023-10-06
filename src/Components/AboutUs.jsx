import './Aboutpage.css'
import dev1 from './f.jpg'
import ScrollAnimation from 'react-animate-on-scroll';
const AboutUs = () => {
  return (
    <ScrollAnimation className='' animateIn="fadeInLeft slower" duration={1.2} delay={0.3}>
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
