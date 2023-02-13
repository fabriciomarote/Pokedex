import React, { useContext } from 'react';
import FavoritesContext from '../contexts/FavoritesContext';
import ModelPokemon from './ModelPokemon.jsx';
import image from '../pokemon-sad.png'
import '../styles/Favorites.css'

const Favorites = ( props ) => {

    const { theme } = props;
    const { favoritesPokemons } = useContext(FavoritesContext);

    return (
        <div className="favorites-container" data-theme={theme}>
            { favoritesPokemons == 0 ? 
                <div className="favorites-text">
                    No tienes aún pokemones favoritos
                    <img src={image} alt="logo" className="poke-image"/>
                </div>
                :
                <> 
                    <p className='poke-fav-text'>Pokemones favoritos</p> 
                    <div className="poke-favorites-grid">
                        { favoritesPokemons.map((favorite, idx) => {
                            return <ModelPokemon key={favorite.name} pokemon={favorite} theme={theme} />
                            })
                        }
                    </div>
                </>
                }  
        </div>
    );
};

export default Favorites;