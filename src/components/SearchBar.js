import React, {useState} from 'react';
import { SearchBarButton } from './theme/ChangesElements';
import '../styles/SearchBar.css'

const SearchBar = (props) => {

    const { onSearch } = props;

    const [search, setSearch] = useState("");
   
    const onChange = (event) => {
        setSearch(event.target.value);
        if (event.target.value.lentgh === 0) {
            onSearch(null);
        }
    };

    const onClick = async (event) => {
        onSearch(search);
    };

    return(
        <SearchBarButton>
        <div className="searchbar-container">
            <div className="col-lg9- col-md-9 col-sm-9 col-xs-9">
                <div className="searchbar">
                    <input placeholder="Buscar pokemon..." onChange={onChange}/>
                </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3 col-xs-3">    
                <div className="searchbar-btn">
                    <button onClick={onClick}>Buscar</button>
                </div>
            </div>
        </div>
        </SearchBarButton>
    )
};

export default SearchBar;