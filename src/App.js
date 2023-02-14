import React, { useContext, useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FavoritesProvider } from './contexts/FavoritesContext';
import FavoritesContext from './contexts/FavoritesContext';
import Navbar from './components/NavBar.jsx';
import Home from './components/Home.jsx';
import useLocalStorage from 'use-local-storage';
import InvalidRoute from './components/InvalidRoute';
import Favorites from './components/Favorites';
import Pokemon from './components/Pokemon';

const localStorageKey = "favorite_pokemon"

function App() {

  const [favorites, setFavorites] = useState([]);

  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const updateFavoritesPokemons = (pokemon) => {
    const updated = [...favorites];
    const indexFavorite = updated.indexOf(pokemon);
    if (indexFavorite >= 0 ) {
      updated.splice(indexFavorite, 1);
    } else {
      updated.push(pokemon);
    }
    setFavorites(updated);
    window.localStorage.setItem(localStorageKey, JSON.stringify(updated))
  };

  const loadFavoritePokemons = () => {
    const pokemons =
      JSON.parse(window.localStorage.getItem(localStorageKey)) || [];
      setFavorites(pokemons);
  };

  useEffect(() => {
    loadFavoritePokemons();
  }, []);

  console.log(favorites);
  return (
        <>
          <FavoritesProvider value={{ favoritesPokemons: favorites, updateFavoritesPokemons: updateFavoritesPokemons }}>
            <div>
              <Navbar theme={theme} setTheme={setTheme}/>
            </div> 
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Home theme={theme}/>}/>
                <Route exact path="/favorites" element={<Favorites theme={theme}/>}/>
                <Route exact path="/pokemon/:id" element={<Pokemon theme={theme}/>}/>
                <Route exact path="/invalid-route" element={<InvalidRoute theme={theme}/>} />
                <Route path="*" element={<InvalidRoute theme={theme}/>} />
              </Routes>     
            </BrowserRouter>
        </FavoritesProvider> 
      </>
  );
};

export default App;