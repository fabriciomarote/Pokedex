import {useState, useEffect} from 'react';
import {getPokemonData, getPokemons, searchPokemon} from './api';
import Navbar from './components/NavBar';
import Pokedex from './components/Pokedex';
import Searchbar from './components/SearchBar';
import { FavoritesProvider } from './contexts/FavoritesContext';
import Themes from './components/theme/Themes';
import { ThemeProvider } from 'styled-components';
import { ContainerGeneral } from './components/theme/ChangesElements';

const localStorageKey = "favorite_pokemon";

function App() {
  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [favorites, setFavorites] = useState([]);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  
  const [theme, setTheme] = useState('light');

  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(15, 15 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 15));
      setNotFound(false);
    } catch(error) {}
  }

  const updateFavoritesPokemons = (name) => {
    const updated = [...favorites];
    const isFavorite = updated.indexOf(name);
    if (isFavorite >= 0) {
      updated.splice(isFavorite, 1);
    } else {
      updated.push(name);
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
  
  useEffect(() => {
    if (!searching) {
      fetchPokemons();
    }  
  }, [page]);

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemons();
    }
    setLoading(true);
    setNotFound(false);
    setSearching(true);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      setPokemons([result]);
      setPage(0);
      setTotal(1);
    }
    setLoading(false);
    setSearching(false);
  }

  return (
    <FavoritesProvider
       value={{
         favoritesPokemons: favorites,
         updateFavoritesPokemons: updateFavoritesPokemons 
       }}
    >
    <div>
        <ThemeProvider theme={Themes[theme]}>
        <ContainerGeneral>  
        <Navbar theme={theme} setTheme={setTheme} />
        <div className="App">
          <Searchbar onSearch={onSearch}/> 
          {notFound ? 
            <div className="not-found-text">
                No se encontro el Pokemon que buscabas
            </div>
             : 
              <Pokedex 
                loading = {loading}
                pokemons={pokemons}
                page={page}
                setPage={setPage}
                total={total}
                theme={theme}
              /> 
            }  
        </div>
        </ContainerGeneral>
        </ThemeProvider>
    </div>
    
    </FavoritesProvider>   
  );
}

export default App;
