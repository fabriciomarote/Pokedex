import React, { useState, useContext } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import '../styles/ModelPokemon.css';

const ModelPokemon = ( props ) => {

    const { pokemon, theme } = props;
    const { favoritesPokemons, updateFavoritesPokemons } = useContext(FavoritesContext);

    const redHeart =    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const blackHeart =  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const heart = favoritesPokemons.some(poke => poke.name === pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (event) => {
        event.preventDefault();
        updateFavoritesPokemons(pokemon);
    };

    const backgroundByPokemonTypes = (type) => {
        let color = 'black';
        if(type === 'normal') {
           return color = "grey";
        } else if (type === 'grass') {
            return color = "green";
        } else if (type === 'grass') {
            return color = "green";
        } else if (type === 'poison') {
            return color = "darkmagenta";
        } else if (type === 'fire') {
            return color = "orangered";
        } else if (type === 'flying') {
            return color = "cornflowerblue";
        } else if (type === 'water') {
            return color = "dodgerblue";
        } else if (type === 'electric') {
            return color = "goldenrod";
        } else if (type === 'ground') {
            return color = "saddlebrown";
        } else if (type === 'fairy') {
            return color = "violet";
        } else if (type === 'bug') {
            return color = "darkolivegreen";
        } else if (type === 'fighting') {
            return color = "coral";
        } else if (type === 'psychic') {
            return color = "mediumslateblue";
        } else if (type === 'rock') {
            return color = "chocolate";
        } else if (type === 'steel') {
            return color = "lightslategray";
        } else if (type === 'ice') {
            return color = "deepskyblue";
        } else if (type === 'ghost') {
            return color = "darkslateblue";
        } else if (type === 'dragon') {
            return color = "darkorange";
        } 
        else { 
            return color;
        }
    }

    console.log(pokemon.types[0].type.name);

    return (
        <div className="pokemon-card" data-theme={theme}>
            <div className="pokemon-img-container">
                <img src={pokemon.sprites.front_default} alt={pokemon.name} className="pokemon-img"/>               
            </div>
            <div className="card-body">
                <div className="card-top">
                    <p className='pokemon-name'>{pokemon.name}</p>
                    <div className="pokemon-id">
                        <p>N°{pokemon.id}</p>
                    </div>
                </div>
                <div className="card-bottom">
                    <div className='card-info'>
                        <div className="poke-type">
                            { pokemon.types.map((type, idx) => {
                                return (
                                    <div style={{ backgroundColor:backgroundByPokemonTypes(type.type.name)}} key={idx} className="pokemon-type-text">
                                        {type.type.name}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="more-info">
                            <a href={`/pokemon/${pokemon.id}`} className="modelPokemon"><p>ver más datos</p></a>
                        </div>
                    </div>
                    <button onClick={clickHeart} className="pokemon-heart-btn">
                        <div className="pokemon-favorite">
                            {heart} 
                        </div>
                    </button>    
                </div>
            </div>
        </div>
    );
};

export default ModelPokemon;