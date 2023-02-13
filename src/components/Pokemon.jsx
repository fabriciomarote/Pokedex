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

    const redHeart =    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const blackHeart =  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const heart = pokemon != undefined ? (favoritesPokemons.includes(pokemon.name) ? redHeart : blackHeart) : '';

    const clickHeart = (event) => {
        event.preventDefault();
        updateFavoritesPokemons(pokemon.name);
    };

    useEffect(() => {
          fetchPokemons();  
      }, [id]);

    console.log(id);
    console.log(pokemon);

    const render = () => {
        if (pokemon !== undefined) {
            return (
                <>
                    <div className="pokemon-container" data-theme={theme}>
                        <div className="box-pokemon">
                            <div className="box-top">
                                <p>{pokemon.name}</p>
                                <p>N°{pokemon.id}</p>
                            </div>
                            <div className="box-center">   
                                <div className="box-center-left">    
                                    <div className="image-container">
                                        <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>               
                                    </div>
                                    <div className="poke-info-date">
                                        <p className='date'>Altura: {pokemon.height}</p>
                                        <p className='date'>Peso: {pokemon.weight}</p>
                                    </div>
                                </div>
                                <div className="box-center-right">      
                                    <div className="pokemon-info-date"> 
                                        <div className="poke-stats">
                                            { pokemon.stats.map((stat, idx) => {
                                                return (
                                                    <div key={idx} className="poke-stat">
                                                        {stat.stat.name} {stat.base_stat}
                                                    </div>
                                                );
                                            })}
                                        </div>
                                        <div className="box-bottom">     
                                            <div className="poke-type pokemon-type">
                                                <p className='name-date'>Tipo:</p>
                                                { pokemon.types.map((type, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-type-text">
                                                            {type.type.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="poke-type pokemon-ability">
                                                <p className='name-date'>Habilidades:</p>
                                                { pokemon.abilities.map((ability, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-ability-text">
                                                            {ability.ability.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <div className="poke-type pokemon-power">
                                                <p className='name-date'>Poderes:</p>
                                                { pokemon.held_items.map((item, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-power-text">
                                                            {item.item.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                            <button onClick={clickHeart} className="pokemon-heart-button">
                                                <div className="poke-favorite">
                                                    {heart}
                                                </div>
                                            </button>    
                                            
                                        </div>
                                    </div>
                                    </div>  
                                </div>
                            
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                </>
            );
        }
    }

    return (
        <>
            {render()}
        </>
              
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