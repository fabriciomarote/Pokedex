import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    background-color: ${({ theme }) => theme.bgc};
`;

export const NavBarContainer = styled.div`
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
    h1, h6 {
        color: ${({ theme }) => theme.text};
    }
`;

export const PaginationContainer = styled.div`
    h5 {
        color: ${({ theme }) => theme.text};
    }
`;

export const PokemonContainer = styled.div`
    background-color: ${({ theme }) => theme.pokemonBGC};
    
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;

    p, .card-top {
        color: ${({ theme }) => theme.text};
    }
`;