import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import FavoritesContext from './contexts/FavoritesContext';
import Navbar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
//import InvalidRoute from './components/InvalidRoute';
import useLocalStorage from 'use-local-storage';
import InvalidRoute from './components/InvalidRoute';

const localStorageKey = "favorite_pokemon"

function App() {

  const { favoritesPokemons } = useContext(FavoritesContext);
  const [favorites, setFavorites] = useState(favoritesPokemons);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const updateFavoritesPokemons = (pokemon) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(pokemon.name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(pokemon);
    }
    setFavorites(updated);
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
      setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  return (
        <>
        <FavoritesProvider
       value={{
         favoritesPokemons: favorites,
         updateFavoritesPokemons: updateFavoritesPokemons 
       }}
      >
          <div>
            <Navbar theme={theme} setTheme={setTheme}/>
          </div>
          <BrowserRouter>  
            <Routes>
              <Route exact path="/" element={<Home theme={theme}/>}/>
              <Route path="*" element={<InvalidRoute theme={theme}/>} />
              <Route path="/invalid-route" element={<InvalidRoute theme={theme}/>} />
            </Routes>     
          </BrowserRouter>
        
        </FavoritesProvider> 
      </>
  );
};

export default App;

//<Route path="/favorites" element={<Favorites/>}/>