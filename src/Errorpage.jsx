import Error404 from './Components/404ERROR.jpg'
import './Errorpage.css'
import { useNavigate } from 'react-router-dom'

const Errorpage = () => {
  const Navigate = useNavigate()
  return (
    <div className='error'>
      <img src={Error404} alt="" srcset="" />
      <button onClick={()=>{Navigate('/')}} type="submit">GO BACK TO HOME</button>
    </div>
  )
}

export default Errorpage