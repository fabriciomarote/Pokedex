import React, {useContext} from 'react';
import { PokemonContainer } from './theme/ChangesElements';
import FavoritesContetx from '../contexts/FavoritesContext';
import '../styles/Pokemon.css';

const Pokemon = (props) => {

    const { pokemon } = props;
    const { favoritesPokemons, updateFavoritesPokemons } = useContext(FavoritesContetx);

    const redHeart =    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const blackHeart = <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
                        </svg>;
    const heart = favoritesPokemons.includes(pokemon.name) ? redHeart : blackHeart;

    const clickHeart = (event) => {
        event.preventDefault();
        updateFavoritesPokemons(pokemon.name);
    };

    return (
        <PokemonContainer>
            <div className="pokemon-card">
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
        </PokemonContainer>
    );
};

export default Pokemon;