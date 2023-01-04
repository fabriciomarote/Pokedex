import React, {useContext} from "react";
import { NavBarContainer } from "./theme/ChangesElements";
import FavoritesContext from '../contexts/FavoritesContext';
import Switch from "./switch/Switch";
import '../styles/NavBar.css';

const Navbar = (props) => {

    const { theme, setTheme } = props;
    const { favoritesPokemons } = useContext(FavoritesContext);

    let imgUrl = "https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png";

    return (
        <NavBarContainer>
            <nav>
                <div className="container">
                    <div className="col-lg-5 col-md-3 col-sm-2 col-xs-2 fila">
                        <Switch theme= {theme} setTheme={setTheme}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 fila">
                    <a href="/"><img src={imgUrl} alt="logo" className="logo-image"/></a>
                    </div>
                    <div className="col-lg-1 col-md-3 col-sm-2 col-xs-2 fila">
                        <div className="favorites">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-heart-fill" viewBox="0 0 16 16">
                                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
                            </svg> {favoritesPokemons.length}
                        </div>
                    </div>
                </div>
            </nav>
        </NavBarContainer>
    );
};

export default Navbar;