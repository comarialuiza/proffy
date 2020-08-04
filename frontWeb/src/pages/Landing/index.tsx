import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';

import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import { Container, Button, ButtonsContainer, LogoContainer, TotalConnections } from './styles';

const Landing: React.FC = () => {
    return (
        <Container>
            <div id="page-landing-content" className="container">
                <LogoContainer className="logo-container">
                    <img src={ logoImg } alt="Proffy"/>
                    <h2>Sua plataforma de estudos online</h2>
                </LogoContainer>

                <img src={ landingImg } alt="Plataforma de estudos" className="hero-image"/>

                <ButtonsContainer>
                    <Button to="/study" className="study">
                        <img src={ studyIcon } alt="Study"/>
                        Estudar
                    </Button>

                    <Button to="/teach" className="teach">
                        <img src={ giveClassesIcon } alt="Teach"/>
                        Ensinar
                    </Button>
                </ButtonsContainer>

                <TotalConnections>
                    Total de 200 conexões já realizadas
                    <img src={ purpleHeartIcon } alt="Coração roxo" />
                </TotalConnections>
            </div>
        </Container>
    );
}

export default Landing;