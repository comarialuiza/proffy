import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TopBar, HeaderContent, Description } from './styles';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

interface Props {
    title: string;
    description?: string;
}

const Header: React.FC<Props> = ({ title, description, children }) => {
    return (
        <Container>
            <TopBar>
                <Link to="/">
                    <img src={ backIcon } alt="Voltar"/>
                </Link>
                <img src={ logoImg } alt="Proffy" className="logo" />
            </TopBar>

            <HeaderContent>
                <h2>{ title }</h2>

                { description && <Description> { description } </Description> }

                { children }
            </HeaderContent>
        </Container>
    );
}

export default Header;