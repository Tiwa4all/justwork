 import Header from './Components/Header';
 import{BrowserRouter, Routes, Route} from 'react-router-dom';

// import of pages using href link start
import './App.css'
import { createContext, useState } from 'react';
import Home from './Home';
import Consultation from './Consultation'
import Aboutuspage from './Components/Aboutuspage';
import Contact from './Components/Contact';
import Errorpage from './Errorpage';
import Carousels from './Components/Carousels';
import Footer from './Footer';
// ends
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
            <Route path='/consultation' element={<Consultation/>}/>
            <Route path ='/contactus' element={<Contact/>}/>
            
          </Routes>
          <Footer/>
        </div>
      </BrowserRouter>
    </ThemeContext.Provider>
  );
}

export default App;
