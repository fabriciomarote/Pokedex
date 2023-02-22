import React, { useContext } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import '../styles/ModelPokemon.css';

const ModelPokemon = ({ pokemon, theme }) => {

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
        let color = '#313131';
        if(type === 'normal') {
           return color = "#D5DBDB";
        } else if (type === 'grass') {
            return color = "#82E0AA";
        } else if (type === 'poison') {
            return color = "#C39BD3";
        } else if (type === 'fire') {
            return color = '#F8C471';
        } else if (type === 'flying') {
            return color = "cornflowerblue";
        } else if (type === 'water') {
            return color = "#AED6F1";
        } else if (type === 'electric') {
            return color = "#F4D03F";
        } else if (type === 'ground') {
            return color = "#A5856F";
        } else if (type === 'fairy') {
            return color = "#D7BDE2";
        } else if (type === 'bug') {
            return color = "#45B39D";
        } else if (type === 'fighting') {
            return color = "#F5B7B1";
        } else if (type === 'psychic') {
            return color = "#7FB3D5";
        } else if (type === 'rock') {
            return color = "#BF9167";
        } else if (type === 'steel') {
            return color = "lightslategray";
        } else if (type === 'ice') {
            return color = "#9AE7F3";
        } else if (type === 'ghost') {
            return color = "#87708C";
        } else if (type === 'dragon') {
            return color = "#F1948A";
        } 
        else { 
            return color;
        }
    }

    return (
        <div className="pokemon-card" data-theme={theme} style={{ backgroundColor:backgroundByPokemonTypes(pokemon.types[0].type.name)}}>
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
                                    <div key={idx} className="pokemon-type-text">
                                        {type.type.name}
                                    </div>
                                );
                            })}
                        </div>
                        <div className="more-info">
                            <a href={`/pokemon/${pokemon.id}`} className="modelPokemon"><p>Ver más</p></a>
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