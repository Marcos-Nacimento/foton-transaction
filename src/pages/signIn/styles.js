import styled from 'styled-components';

export const Container = styled.main `
    display: flex;

    flex-direction: row;
    background-color: #000;
`;

export const ContentLeft = styled.div `
    height: 100vh;
    width: 50vw;

    background-color: #000;
`;

export const ContentRight = styled.div `
    display: flex;

    align-items: center;
    height: 100vh;
    width: 50vw;
    flex-direction: column;
    background-color: #FFFFFF;
`;

export const SubTitle = styled.p `
    color: #FFFFFF;
    margin-top: 10rem;
`;

export const ContentSubTitle = styled.div `
    padding: 1rem;

    display: flex;
    align-items: center;
    justify-content: center;
`;

export const Button = styled.div `
    height: 3rem;
    width: 20rem;

    background-color: #ff69b4;
    margin-top: 4rem;
    border-radius: 0.7rem;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`;