import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import { Container, TeacherSubject, TeacherName, TeacherDescription, TeacherPrice, TeacherButton } from './styles';
import api from '../../services/api';
export interface Teacher {
    id: number;
    name: string;
    subject: string;
    avatar: string;
    bio: string;
    cost: number;
    whatsapp: string;
}
interface Props {
    teacher: Teacher;
}

const TeacherItem: React.FC<Props> = ({ teacher }) => {
    async function createNewConnection() {
        await api.post('/connections', {
            user_id: teacher.id
        })
    }

    return (
        <Container>
            <header>
                <img src={ teacher.avatar } alt={ teacher.name }/>
                <div>
                    <TeacherName>{ teacher.name }</TeacherName>
                    <TeacherSubject>{ teacher.subject }</TeacherSubject>
                </div>
            </header>

            <TeacherDescription>
                { teacher.bio }
            </TeacherDescription>

            <footer>
                <TeacherPrice>Preço/hora <strong>R$ { teacher.cost }</strong></TeacherPrice>
                <TeacherButton href={`https://wa.me/${ teacher.whatsapp }`} target="_blank" onClick={ createNewConnection }>
                    <img src={ whatsappIcon } alt="Whatsapp"/>
                    Entrar em contato
                </TeacherButton>
            </footer>
        </Container>
    );
}

export default TeacherItem;