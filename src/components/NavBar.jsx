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
                    <div className="fila">
                        <Switch theme= {theme} setTheme={setTheme}/>
                    </div>
                    <div className="fila">
                    <a href="/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" className="logo-image"/></a>
                    </div>
                    <div className="fila">
                        <a href="/favorites" className="favorites">
                            <AiFillHeart size={25} className="icon-favorites"/> {favoritesPokemons.length}
                        </a>
                    </div>
                </div>
            </nav>

    );
};

export default Navbar;