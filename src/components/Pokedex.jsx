import React from 'react';
import Pagination from './Pagination.jsx';
import ModelPokemon from './ModelPokemon.jsx';
import Loading from './Loading.jsx';
import '../styles/Pokedex.css'

const Pokedex = (props) => {

    const { pokemons, page, setPage, total, loading, theme } = props;

    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    };

    const backgroundByPokemonType = (type) => {
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


    return (
        <div className='pokedex-container' data-theme={theme}>
            <div className="header">
                <div className=" box-title col-lg-9 col-md-9 col-sm-7 col-xs-12" >
                    <p className='title-pokedex'>Pokedex</p>
                </div>
                <div className="col-lg-3 col-md-3 col-sm-5 col-xs-12">
                    <Pagination
                        page={page +1}
                        totalPages={total}
                        onLeftClick={lastPage}
                        onRightClick={nextPage}
                        theme={theme}
                    />
                </div>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                { loading ?
                    <div className="pokedex-text-loading">
                        <p> Cargando Pokemones...</p>
                        <Loading/>
                    </div>
                    :
                    <div className="pokedex-grid">
                        {pokemons.map((pokemon, idx) => {
                            return <ModelPokemon style={{ backgroundColor:backgroundByPokemonType(pokemon.types[0])}} key={pokemon.name} pokemon={pokemon} theme={theme}/>
                        })}
                    </div>
                }
            </div>
        </div>
    );
};

export default Pokedex;