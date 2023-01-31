import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { ContainerGeneral } from './components/theme/ChangesElements';
import Navbar from './components/NavBar';
import Home from './components/Home';
import Favorites from './components/Favorites';
import Themes from './components/theme/Themes';

function App() {

  const [favorites, setFavorites] = useState([]);
  
  const [theme, setTheme] = useState(localStorage.getItem('theme'));

  return (
        <ThemeProvider theme={Themes[theme]}>
          <ContainerGeneral>  
            <>
              <Navbar theme={theme} setTheme={setTheme}/>
            </>
            <BrowserRouter>  
              <Routes>
                <Route exact path="/" element={<Home theme={theme}/>}/>
                <Route path="/favorites" element={<Favorites/>}/>
              </Routes>     
            </BrowserRouter>
          </ContainerGeneral>
        </ThemeProvider>
  );
};

export default App;
