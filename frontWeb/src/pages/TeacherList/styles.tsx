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
        grid-template-columns: repeat(3, 1fr);
        column-gap: 16px;
        position: absolute;
        bottom: -28px;
    }
`;


export const InputBlock = styled.div`
    position: relative;

    @media (max-width: 700px) {
        margin-top: 1.4rem;
    }

    &&:focus-within::after {
        content: '';
        width: calc(100% - 3.2rem);
        height: 2px;
        background: var(--color-primary-light);
        position: absolute;
        left: 1.6rem;
        right: 1.56rem;
        bottom: 0;
    }
`;

export const Label = styled.label`
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
`;
export const Input = styled.input`
    width: 100%;
    height: 5.6rem;
    margin-top: .8rem;
    border-radius: .8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
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

