import { useRef, useEffect, useState} from 'react'
import {FaBars, FaCaretDown} from 'react-icons/fa'
import pushtechn from './pushtechn.png'
import './Header.css'
import ReactSwitch from 'react-switch'
import { Link } from 'react-router-dom'

// import {HashLink} from 'react-router-hash-link'; 
// hashlink for self-navigation

const Header = ({change, tick}) => {
    const [scroll, setScroll] = useState(false);
    const changeNavbarColor = () => {
    if (window.scrollY > 50) {
      setScroll(true);
    } else {
      setScroll(false);
    }
 };

 useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);
 }, []);
    const dateBuilder = (d)=>{
        let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 
    'September', 'October', 'November', 'December'];
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

        let day =days[d.getDay()];
        let month = months[d.getMonth()];
        let date = d.getDate();
        let year = d.getFullYear();

        return `${day} ${date} ${month} ${year} ` 
    }

    // useNaf ref was used to for mobile responsiveness to toggle the menu 
    const navRef = useRef();
    const shownavbar = ()=>{
        navRef.current.classList.toggle('navclick');
    }

    // usestate was used to on and off the click menu attached with useref for clicking outside to close
    const [showmenu, setShowmenu]= useState(false)
    
    const click = useRef();


    // useEffect here was used to click outside to close
     useEffect(()=>{
        let handler =(e)=>{
            if(!click.current.contains(e.target)){
                setShowmenu(false);
                // console.log(click)
            }
        };
        document.addEventListener('mousedown', handler);

        return()=>{
            document.removeEventListener('mousedown', handler);
        }
   
     })

  return (
    <div className={scroll ? 'allheader1 scroll' : 'allheader1'}>
        {/* first header with number */}
        <div className='allheader'>
            <div className="upper">
               <p>{dateBuilder (new Date())}|</p>
               <p>+2348029315286 | info@pushtechn.com</p>
                <div className='switch'><ReactSwitch onChange={change} checked={tick}/></div>
            </div>
            <div className="phoneview">
                <div className="logoview">
                    <img src={pushtechn} alt="" srcset="" />
                </div>
                <div className="dropmenu">
                        <FaBars onClick={shownavbar}/>
                </div>
            </div>
        </div>

        {/* seconf header with menus */}
        <div ref={navRef} className="wholeflex header">
                <div className="headerflex">
                    <div className="logo">
                        <img src={pushtechn} alt="" srcset="" />
                    </div>
                    <div className="menuoptflex">
                        {/* I used an onclick={shownavbar} to close navbar for mobile when each are clicked  */}
                        <Link onClick={shownavbar} className="opt home" to='/' smooth>Home</Link>
                        <Link onClick={shownavbar} className="opt" to='/Aboutus' smooth>About Us</Link>
                                    {/* I used useRef for this dropdown */}
                        <div className="opt" ref={click} onClick={()=>setShowmenu(!showmenu)} to='' smooth>Services<FaCaretDown className='FaCaretDown'/>
                            {showmenu &&<div  className="drop-down one-drop">
                                <Link to='/consultation'><p>Consultation</p></Link>
                                <Link to='*'><p>Web & Mobile Development</p></Link>
                                <Link><p>Web Management</p></Link>
                                <Link><p>Clouding</p></Link>
                                <Link><p>Security</p></Link>                    
                            </div>}
                        </div>
                        <Link onClick={shownavbar} to='/Portfolio' className="opt">Portfolio</Link>
                        {/* <Link className="opt" to='#aboutus' smooth>Faq</Link> */}
                    </div> 
                    <div className="contbtn">
                    <Link to='/contactus'><button onClick={shownavbar} className='ctb' type="submit">CONTACT US</button></Link>
                    </div>
                </div>
        </div>
    </div>

  )
}

export default Header
