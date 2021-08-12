import styled from 'styled-components';

export const Container = styled.header `
    display: flex;

    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    height: 3rem;
`;


export const Circle = styled.div `
    height: 2.5rem;
    width: 2.5rem;

    border-radius: 2rem;
    background-color: #016BFF;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

export const NavigationContainer = styled.ul `
    display: flex;

    align-items: center;
    list-style: none;
`;

export const NavigationName = styled.li `
    margin: 1rem;

    font-weight: 600;
    cursor: pointer;
`;

export const ButtonContainer = styled.div `
    height: 3rem;
    width: 9rem;
    display: flex;

    justify-content: center;
    align-items: center;
    color: #FFFFFF;
    background-color: #016BFF;
    border-radius: 2rem;
    cursor: pointer;

    &:hover {
        opacity: 0.9;
    }
`;