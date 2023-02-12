import './Services.css';
import './animate.css'
import Boxanime from './Boxanime';
import build from './build.png';
import consultant from './consultant.png';
import payment from './payment.png';
import managements from './managements.png';
import ScrollAnimation from 'react-animate-on-scroll';
const Services = () => {
  return (
    <div className='wholesection'>
        <div className='wwd'>
        <h1 id='hh'>What We Do</h1><hr className='serviceshr'/>
        <Boxanime/>
        </div>
        <div className="allsection">
            
            <div className="sectionflex">
            <ScrollAnimation className='newwithforsection1sunstitute div1opacity' animateIn="zoomIn" duration={1.2} delay={1.0}>
                <div className="section1 build1">
                    <img className='buildimg' src={build} alt="" srcset="" />
                    <h1 style={{marginTop:'-8px', marginBottom:'0px'}} >We build your website from scratch</h1>
                    <p>Our technology drives across different industries, Education, E-commerce, Travels, Media,
                        advertisement, Health, Government, News and so on. Are you interested in Plugins, Blogging, coding,
                        chat, responsive software, info-graphic, e-commerce website, Bitcoin, multilevel marketing, internet,
                        application website, development website, dark websites, analytics, Learning management website,
                        portfolio website, travel websites, real estate and the likes…</p>
                </div>
                </ScrollAnimation>

                <ScrollAnimation className='newwithforsection1sunstitute div2opacity' animateIn="zoomIn" duration={1.2} delay={1.0}>
                    <div className="section1 payment1">
                    <img className='paymentimg' src={payment} alt="" srcset="" />
                        <h1>We integrate Payment Gateways</h1>
                        <p>More interesting is the fact that you can own your own payment gateway. Surprised? Yes! At Puchtechn,
                            your dream of owning your own payment gateway will come through.</p>
                    </div>
                </ScrollAnimation>
                
            </div>

            <div className="sectionflex">
                <ScrollAnimation className='newwithforsection1sunstitute' animateIn="zoomIn" duration={1.2} delay={1.0}>
                <div style={{marginTop:'99px'}} className="section1 consultant1">
                <img className='consultantimg' src={consultant} alt="" srcset="" />
                    <h1>We consult</h1>
                    <p>Are you an organization or an individual continually having difficulty in your website? We can lend you
                        a helping hand all to bring your dream to reality and make your business livelier.</p>
                </div>
                </ScrollAnimation>

                <ScrollAnimation className='newwithforsection1sunstitute' animateIn="zoomIn" duration={1.2} delay={1.0}>
                <div style={{marginTop:'109px'}} className="section1 management1">
                <img className='managementimg' src={managements} alt="" srcset="" />
                    <h1>We manage</h1>
                    <p>Puctechn has the right team brought together not only build but also manage your project effectively.</p>
                    
                </div>
                </ScrollAnimation>
            </div>
        </div>
    </div>

  )
}

export default Services
