import styled from 'styled-components';

export const Container = styled.article`
    background: var(--color-box-base);
    border: 1px solid var(--color-line-in-white);
    border-radius: 0.8rem;
    margin-top: 2.4rem;
    overflow: hidden;

    @media (min-width: 700px) {
        header, footer {
            padding: 3.2rem;
        }
    }

    header {
        padding: 3.2rem 2rem;
        display: flex;
        align-items: center;

        img {
            width: 8rem;
            height: 8rem;
            border-radius: 50%;
        }

        div {
            margin-left: 2.4rem;
        }
    }

    footer {
        padding: 3.2rem 2rem;
        background: var(--color-box-footer);
        border-top: 1px solid var(--color-line-in-white);
        margin-top: 3.2rem;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`;

export const TeacherName = styled.strong`
    font: 700 2.4rem Archivo;
    display: block;
    color: var(--color-text-title);
`;

export const TeacherSubject = styled.span`
    font-size: 1.6rem;
    display: block;
    margin-top: .4rem;
`;

export const TeacherDescription = styled.p`
    padding: 0 2rem;
    font-size: 1.6rem;
    line-height: 2.8rem;
`;

export const TeacherPrice = styled.p`
    font-size: 1.6rem;
    display: block;

    strong {
        color: var(--color-primary);

        @media (min-width: 700px) {
            display: initial;
            margin-left: 1.6rem;
        } 
    }
`;

export const TeacherButton = styled.a`
    width: 20rem;
    height: 5.6rem;
    background: var(--color-secundary);
    color: var(--color-button-text);
    border: 0;
    border-radius: .8rem;
    cursor: pointer;
    font: 700 1.4rem Archivo;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    transition: .2s;
    text-decoration: none;

    @media (min-width: 700px) {
        width: 24.5rem;
        font-size: 1.6rem;
        justify-content: center;

        img {
            margin-right: 1.6rem;
        }
    } 

    &&:hover {
        background: var(--color-secundary-dark);
    }
`;