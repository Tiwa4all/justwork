 import Header from './Components/Header';
 import{BrowserRouter, Routes, Route} from 'react-router-dom';
// import Subservices from './Components/Subservices';
import './App.css'
import { createContext, useState } from 'react';
import Home from './Home';
import Aboutuspage from './Components/Aboutuspage';
import Errorpage from './Errorpage';
import Carousels from './Components/Carousels';
import Footer from './Footer';
 export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = ()=>{
    setTheme((curr) =>(curr === "light" ? "dark" :"light"));
  };
  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <BrowserRouter>
        <div id={theme}>
          <Header change={toggleTheme} tick={theme==='dark'}/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/Portfolio' element={<Carousels/>}/>
            <Route path='/Aboutus' element={<Aboutuspage/>}/>
            <Route path='*' element={<Errorpage/>}/>
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
