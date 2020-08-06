import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    max-width: 700px;

    @media (min-width: 700px) {
        max-width: 100%;
    }
`;

export const SearchTeachers = styled.form`
    margin-top: 3.2rem;

    @media (min-width: 700px) {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -48px;
    }
`;

export const Main = styled.main`
    margin: 3.2rem auto;
    width: 90%;

    @media (min-width: 700px) {
        padding: 32px 0;
        max-width: 740px;
        margin: 0 auto;
    }
`;

export const Button = styled.button`
    width: 100%;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: .8rem;
    cursor: pointer;
    font: 700 1.6rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: background-color .2s;
    margin-top: 2em;

    &&:hover {
        background-color: var(--color-secundary-dark);
    }
`;

