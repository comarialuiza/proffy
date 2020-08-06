import styled from 'styled-components';

export const TextareaBlock = styled.div`
    position: relative;
    margin-top: 2rem;

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
        bottom: 7px;
    }
`;

export const Label = styled.label`
    color: var(--color-text-in-primary);
    font-size: 1.4rem;
`;
export const TextareaField = styled.textarea`
    width: 100%;
    height: 16rem;
    margin-top: .8rem;
    border-radius: .8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    resize: vertical;
    font: 1.6rem Archivo;
    min-height: 8rem;
`;
