import styled from 'styled-components';

export const ContainerGeneral = styled.div`
    background-color: ${({ theme }) => theme.bgc};
`;

export const NavBarContainer = styled.div`
    color: ${({ theme }) => theme.text};
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

    h3, p {
        color: ${({ theme }) => theme.text};
    }
`;