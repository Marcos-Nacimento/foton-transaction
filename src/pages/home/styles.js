import styled from 'styled-components';

export const Container = styled.div `
    background-color: #000;
    height: 100vh;
`;

export const Title = styled.p `
    color: #FFFFFF;

    margin-top: 0.9rem;
`;

export const Button = styled.div `
    height: 3rem;
    width: 17rem;

    background-color: #ff69b4;
    margin-top: 2rem;
    border-radius: 0.8rem;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;

export const Content = styled.main `
    display: flex;

    align-items: center;
    flex-direction: column;
`;

export const ContainerLogo = styled.div `
    padding: 1rem;
`;