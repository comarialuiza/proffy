import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, TeacherSubject, TeacherName, TeacherDescription, TeacherPrice, TeacherButton } from './styles';

const TeacherItem: React.FC = () => {
    return (
        <Container>
            <header>
                <img src="https://avatars2.githubusercontent.com/u/2254731?s=460&u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&v=4" alt="Diego Fernandes"/>
                <div>
                    <TeacherName>Diego Fernandes</TeacherName>
                    <TeacherSubject>Química</TeacherSubject>
                </div>
            </header>

            <TeacherDescription>
                Entusiasta pelas melhores tecnologias de química avançada. Amo explodir as coisas!
            </TeacherDescription>

            <footer>
                <TeacherPrice>Preço/hora <strong>R$ 80,00</strong></TeacherPrice>
                <TeacherButton type="button">
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato
                </TeacherButton>
            </footer>
        </Container>
    );
}

export default TeacherItem;