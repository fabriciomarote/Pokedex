import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    background-color: ${({ theme }) => theme.bgc};
`;

export const NavBarContainer = styled.div`
    background-color: ${({ theme }) => theme.bgc};
    color: ${({ theme }) => theme.text};

    .favorites {
        background-color: ${({ theme }) => theme.button};
        color: ${({ theme }) => theme.textOpposite};
    }
`;

export const SearchBarButton = styled.div`
    button {
        background-color: ${({ theme }) => theme.button};
        color: ${({ theme }) => theme.textOpposite};
    }
`;

export const PokedexContainer = styled.div`
    .title-pokedex, .pokedex-text-loading {
        color: ${({ theme }) => theme.text};
    }
`;

export const PaginationContainer = styled.div`
    .pagination {
        color: ${({ theme }) => theme.text};
    }
`;

export const PokemonContainer = styled.div`
    .pokemon-card {
        background-color: ${({ theme }) => theme.pokemonBGC};
    }
    .pokemon-card:hover {
        background-color: ${({ theme }) => theme.hover};
    }

    p, .card-top { 
        color: ${({ theme }) => theme.text};
    }
    .pokemon-heart-btn {
        border-color: black;
    }
    .pokemon-type-text {
        background-color: rgb(10, 14, 13);
        color: white;
  }
`;