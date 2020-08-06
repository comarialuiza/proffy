import styled from 'styled-components';

export const SelectBlock = styled.div`
    position: relative;
    margin-bottom: 2rem;

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
export const SelectField = styled.select`
    width: 100%;
    height: 5.6rem;
    margin-top: .8rem;
    border-radius: .8rem;
    background: var(--color-input-background);
    border: 1px solid var(--color-line-in-white);
    outline: 0;
    padding: 1.2rem 1.6rem;
    font: 1.6rem Archivo;
`;
