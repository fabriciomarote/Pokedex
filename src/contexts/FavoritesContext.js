import React from 'react';

const FavoritesContetx = React.createContext({
    favoritesPokemons: [],
    updateFavoritesPokemons: (id) => null
}) ;

export const FavoritesProvider = FavoritesContetx.Provider;

export default FavoritesContetx;