import React, { useContext, useState, useEffect } from 'react';
import { getPokemonData, getPokemons2 } from '../api';
import { useParams } from "react-router-dom";
import FavoritesContext from '../contexts/FavoritesContext';
import '../styles/Pokemon.css';

const Pokemon = ({ theme }) => {

    const { id } = useParams();
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
    const heart = pokemon !== undefined && favoritesPokemons.includes(pokemon) ? redHeart : blackHeart;

    const clickHeart = (event) => {
        event.preventDefault();
        updateFavoritesPokemons(pokemon);
    };

    const backgroundByPokemonTypes = (type) => {
        let color = '#313131';
        if(type === 'normal') {
           return color = "#D3D3D3";
        } else if (type === 'grass') {
            return color = "#35C74D";
        } else if (type === 'poison') {
            return color = "#A86CE4";
        } else if (type === 'fire') {
            return color = '#F98E1D';
        } else if (type === 'flying') {
            return color = "cornflowerblue";
        } else if (type === 'water') {
            return color = "#74C5F0";
        } else if (type === 'electric') {
            return color = "#F9E839";
        } else if (type === 'ground') {
            return color = "#A5856F";
        } else if (type === 'fairy') {
            return color = "#CF92E6";
        } else if (type === 'bug') {
            return color = "#81A97F";
        } else if (type === 'fighting') {
            return color = "coral";
        } else if (type === 'psychic') {
            return color = "#799BB5";
        } else if (type === 'rock') {
            return color = "#BF9167";
        } else if (type === 'steel') {
            return color = "lightslategray";
        } else if (type === 'ice') {
            return color = "#9AE7F3";
        } else if (type === 'ghost') {
            return color = "#87708C";
        } else if (type === 'dragon') {
            return color = "#F76A4E";
        } 
        else { 
            return color;
        }
    }

    useEffect(() => {
        fetchPokemons();  
    }, []);

    const render = () => {
        if (pokemon !== undefined) {
            return (
                <>
                    <div className="box-pokemon" style={{ backgroundColor:backgroundByPokemonTypes(pokemon.types[0].type.name)}}>
                        <div className="box-top-poke">
                            <p>{pokemon.name}</p>
                            <p>N°{pokemon.id}</p>
                        </div>
                        <div className="box-center">   
                            <div className="box-center-left">    
                                <div className="image-container">
                                    <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-image"/>               
                                </div>
                            </div>
                            <div className="box-center-right">      
                                <div className="pokemon-info-date"> 
                                    <div className="poke-stats">
                                        { pokemon.stats.map((stat, idx) => {
                                            return (
                                                <div key={idx} className="poke-stat">
                                                    {stat.stat.name}: {stat.base_stat}
                                                </div>
                                            );
                                        })}
                                    </div>
                                    <div className="box-bottom">     
                                        <div className="poke-types pokemon-type">
                                            <p className='name-date'>Tipo:</p>
                                            <div className='dates'>
                                                { pokemon.types.map((type, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-type-text">
                                                            {type.type.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="poke-types pokemon-ability">
                                            <p className='name-date'>Habilidades:</p>
                                            <div className='dates'>
                                                { pokemon.abilities.map((ability, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-ability-text">
                                                            {ability.ability.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="poke-types pokemon-power">
                                            <p className='name-date'>Poderes:</p>
                                            <div className='dates'>
                                                { pokemon.held_items.map((item, idx) => {
                                                    return (
                                                        <div key={idx} className="poke-power-text">
                                                            {item.item.name}
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="poke-info-like"> 
                                            <div className="poke-info-date">
                                                <p className='date'>Altura: {pokemon.height},0 m</p>
                                                <p className='date'>Peso: {pokemon.weight},0 kg</p>
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
        <div className="pokemon-container" data-theme={theme}>
           {render()}
        </div>
              
    )
};

export default Pokemon;