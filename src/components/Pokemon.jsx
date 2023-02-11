import React, { useContext, useState, useEffect } from 'react';
import { getPokemonData, getPokemons2 } from '../api';
import { useParams } from "react-router-dom";
import FavoritesContext from '../contexts/FavoritesContext';
import '../styles/Pokemon.css';

const Pokemon = ( props ) => {

    const { id } = useParams();
    const { theme } = props;
    
    const [pokemons, setPokemons] = useState([]);
    const pokemon = pokemons.find(poke => poke.id == id)

    const { favoritesPokemons, updateFavoritesPokemons } = useContext(FavoritesContext);

    const fetchPokemons = async () => {
        try{
          const data = await getPokemons2(279, 0);
          const promises = data.results.map(async (pokemon) => {
            return await getPokemonData(pokemon.url);
          })
          const results = await Promise.all(promises);
          setPokemons(results);
        } catch(error) {}
      };

    const redHeart =    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const blackHeart =  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    //const heart = favoritesPokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (event) => {
        event.preventDefault();
       // updateFavoritesPokemons(pokemon.name);
    };

    useEffect(() => {
          fetchPokemons();  
      }, [id]);

    console.log(id);
    console.log(pokemon);

    return (
        <div className="pokemon-container" data-theme={theme}>
            
        </div>      
    )
};

export default Pokemon;

/*

<div className="pokemon-container" data-theme={theme}>
                <div className="pokemon-image-container">
                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"/>               
                </div>
                <div className="pokemon-body">
                    <div className="card-top">
                        <p className='pokemon-name'>{pokemon.name}</p>
                        <div className="pokemon-id">
                            <p>N°{pokemon.id}</p>
                        </div>
                    </div>
                    <div className="card-bottom">
                        <div className="pokemon-type">
                            {pokemon.types.map((type, idx) => {
                                return (
                                    <div key={idx} className="pokemon-type-text">
                                        {type.type.name}
                                    </div>
                                );
                            })}
                        </div>
                        <button onClick={clickHeart} className="pokemon-heart-btn">
                            <div className="pokemon-favorite">
                                {heart}
                            </div>
                        </button>    
                    </div>
                </div>
            </div>

*/