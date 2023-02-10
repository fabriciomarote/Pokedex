import React, { useContext } from "react";
import { AiFillHeart } from "react-icons/ai";
import FavoritesContext from '../contexts/FavoritesContext';
import Switch from "./Switch.jsx";
import '../styles/NavBar.css';

const Navbar = (props) => {

    const { theme, setTheme } = props;

    const { favoritesPokemons } = useContext(FavoritesContext);

    return (
            <nav>
                <div className="container" data-theme={theme}>
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 fila">
                        <Switch theme= {theme} setTheme={setTheme}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 fila">
                    <a href="/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" className="logo-image"/></a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 fila">
                        <div className="favorites">
                            <AiFillHeart size={25} className="icon-favorites"/> {favoritesPokemons.length}
                        </div>
                    </div>
                </div>
            </nav>

    );
};

export default Navbar;