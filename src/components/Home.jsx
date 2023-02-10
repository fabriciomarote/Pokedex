import { useState, useEffect } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import Pokedex from './Pokedex.jsx';
import Searchbar from './SearchBar.jsx';
import '../styles/Home.css'

const Home = ( props ) => {

  const [pokemons, setPokemons] = useState([]);
  const [page, setPage] = useState(0);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);
  const [searching, setSearching] = useState(false);
  
  const { theme } = props;

  const fetchPokemons = async () => {
    try{
      setLoading(true);
      const data = await getPokemons(12, 12 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      })
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotal(Math.ceil(data.count / 12));
      setNotFound(false);
    } catch(error) {}
  };

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
  };

  return (
        <div className="home" data-theme={theme}>
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
  );
};

export default Home;