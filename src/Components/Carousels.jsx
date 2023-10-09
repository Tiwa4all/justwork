import Carousel from "react-elastic-carousel";
import { Link } from "react-router-dom";
import './Carousel.css';
// import Api from "./Api";
import portfolio1 from './Screenshot1.png'
import portfolio2 from './Screenshot2.png'
import portfolio3 from './Screenshot3.png'
import portfolio4 from './Screenshot4.png'
import portfolio5 from './Screenshot5.png'
import portfolio6 from './Screenshot6.png'
import portfolio7 from './Screenshot7.png'
import portfolio8 from './Screenshot8.png'
import './Aboutpage.css';
import Item from "./Item";
const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2 },
    { width: 768, itemsToShow: 3 },
    // { width: 1200, itemsToShow: 4 },
  ];
  
const Carousels = () => {
// //POST API
//   const {response, sendDataToAPI }= Api('https://jsonplaceholder.typicode.com/posts')
// // RANDOM GET API 
//   const {data} = Api('https://jsonplaceholder.typicode.com/posts')
//for joke GET API display page
    // const {data, error, loading, refetch}= Api('https://v2.jokeapi.dev/joke/Any');
    // // if (loading) return <h1 className="loading">Loading</h1>
    // if (loading) return <div class="lds-spinner loading"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    // if (error) return console.log(error)

  return (
    <div>
      <div className='menupage'>
        <h1>Portfolio</h1>
        <div className='mp2'>
          <Link to='/' className='abthome'><p>Home</p></Link>
          <p className='dashh'>|</p>
          <p className='abt'>Portfolio</p>
        </div>
      </div>
     <div className="jokes">
     {/* <div>
POST API
      <button onClick={sendDataToAPI}>Send Data to API</button>
      {response && (
        <div>
          <h2>Response from API:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div> */}
{/* RANDOM GET API */}
      {/* <div>
        <h1>API Data:</h1>
        <h3>
          {data.map((item) => (
            <li style={{color: 'blue'}} key={item.id}>{item.title}</li>
          ))}
        </h3>
      </div> */}
{/* JOKES GET API DISPLAY */}
        {/* for joke Api display page */}
        {/* <h1 className="joke">{data?.setup}-{data?.delivery}</h1> */}
        {/* <div className="jokesbutton"><button onClick={refetch} type="submit">Refresh Jokes</button></div> */}
     </div>
      <Carousel className="caro" enableAutoPlay autoPlaySpeed={9000}  enableInfiniteLoop breakPoints={breakPoints}>
        <Item>
          <Link className="caro-link" to='/'><img src={portfolio1} alt="" srcset="" />
          <p className='caro-content'>Meta Plugin</p></Link>
          </Item>
        <Item>
            <Link className="caro-link"><img  src={portfolio2} alt="" srcset="" />
            <p className='caro-content'>React Plugin</p>
            </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio3} alt="" srcset="" />
          <p className='caro-content'>Twitter Plugin</p>
          </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio4} alt="" srcset="" />
          <p className='caro-content'>Cubes Plugin</p>
          </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio5} alt="" srcset="" />
          <p className='caro-content'>Plight Plugin</p>
          </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio6} alt="" srcset="" />
          <p className='caro-content'>Facebook Plugin</p>
          </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio7} alt="" srcset="" />
          <p className='caro-content'>Goclass Plugin</p>
          </Link>
        </Item>
        <Item>
          <Link className="caro-link">
          <img  src={portfolio8} alt="" srcset="" />
          <p className='caro-content'>Penstack Plugin</p>
          </Link>
        </Item>
    </Carousel>
    </div>
  )
}

export default Carousels

