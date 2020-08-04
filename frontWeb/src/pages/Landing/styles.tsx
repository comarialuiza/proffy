import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    
    color: var(--color-text-in-primary);
    background: var(--color-primary);

    @media (min-width: 1100px) {
        #page-landing-content {
            max-width: 1100px;
            display: grid;
            grid-template-rows: 350px 1fr;
            grid-template-columns: 2fr 1fr 1fr;
            grid-template-areas: "logo hero hero" "buttons buttons total"
        }
    }

    @media (min-width: 1100px) {
        .hero-image {
            grid-area: hero;
            justify-self: end;
        }
    }
`;

export const LogoContainer = styled.div`
    margin-bottom: 3.2rem;

    @media (max-width: 1100px) {
        text-align: center;
    }

    h2 {
        font-weight: 500;
        font-size: 2.4rem;
        line-height: 4.6rem;
        margin-top: 0.8rem;
    }

    img {
        height: 10rem;

        @media (min-width: 1100px) {
            height: 100%;
            text-align: left;
        }
    }

    @media (min-width: 1100px) {
        grid-area: logo;
        align-self: center;
        margin: 0;

        h2 {
            text-align: initial;
            font-size: 3.6rem;
        }
    }
`;

export const ButtonsContainer = styled.div`
    display: flex;
    justify-content: center;
    margin: 3.2rem 0;

    @media (min-width: 1100px) {
        grid-area: buttons;
        justify-content: flex-start;
    }
`;

export const Button = styled(Link)`
    width: 30rem;
    height: 10.4rem;
    border-radius: .8rem;
    font: 700 2rem Archivo;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: var(--color-button-text);
    transition: background-color .2s;

    &&:first-of-type {
        margin-right: 1.6rem;
        background-color: red;
    }

    &&.study {
        background-color: var(--color-primary-lighter);

        &&:hover {
            background-color: var(--color-primary-light);
        }
    }

    &&.teach {
        background-color: var(--color-secundary);

        &&:hover {
            background-color: var(--color-secundary-dark);
        }
    }

    img {
        width: 3rem;
        margin-right: 2.4rem;
    }
`;

export const TotalConnections = styled.span`
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 1100px) {
        grid-area: total;
        justify-self: end;
    }

    img {
        margin-left: .8rem;
    }
`;