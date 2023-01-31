import React from "react";
import { NavBarContainer } from "./theme/ChangesElements";
import { AiFillHeart } from "react-icons/ai";
import Switch from "./switch/Switch";
import '../styles/NavBar.css';

const Navbar = (props) => {

    const { theme, setTheme } = props;

    return (
        <NavBarContainer>
            <nav>
                <div className="container">
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 fila">
                        <Switch theme= {theme} setTheme={setTheme}/>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-8 col-xs-8 fila">
                    <a href="/"><img src="https://raw.githubusercontent.com/PokeAPI/media/master/logo/pokeapi_256.png" alt="logo" className="logo-image"/></a>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2 fila">
                        <div className="favorites">
                            <AiFillHeart size={25} className="icon-favorites"/> {}
                        </div>
                    </div>
                </div>
            </nav>
        </NavBarContainer>
    );
};

export default Navbar;