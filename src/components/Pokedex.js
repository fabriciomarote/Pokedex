import { PokedexContainer } from './theme/ChangesElements'; 
import React from 'react';
import Pagination from './Pagination';
import Pokemon from './Pokemon';
import '../styles/Pokedex.css'
import Loading from './Loading';

const Pokedex = (props) => {

    const {pokemons, page, setPage, total, loading, theme} = props;
    const lastPage = () => {
        const nextPage = Math.max(page - 1, 0);
        setPage(nextPage);
    };

    const nextPage = () => {
        const nextPage = Math.min(page + 1, total);
        setPage(nextPage);
    };

    return (
        <PokedexContainer>
            <div className='pokedex-container'>
                <div className="header">
                    <div className=" box-title col-lg-10 col-md-9 col-sm-7 col-xs-12" >
                        <p className='title-pokedex'>Pokedex</p>
                    </div>
                    <div className="col-lg-2 col-md-3 col-sm-5 col-xs-12">
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
                    {loading ?
                        <div className="pokedex-text-loading">
                            <p> Cargando Pokemones...</p>
                            <Loading/>
                        </div>
                        :
                        <div className="pokedex-grid">
                            {pokemons.map((pokemon, idx) => {
                                return <Pokemon key={pokemon.name} pokemon={pokemon} />
                            })}
                        </div>
                    }
                </div>
            </div>
        </PokedexContainer>
    );
};

export default Pokedex;