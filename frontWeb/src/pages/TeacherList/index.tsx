import React from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';
import Input from '../../components/Input';

import { Container, SearchTeachers, Main } from './styles';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <Header title="Esses são os proffys disponíveis.">
                <SearchTeachers>
                    <Input label='Matéria' name='subject' />
                    <Input label='Dia da semana' name='week_day' />
                    <Input label='Hora' name='time' type="time" />
                </SearchTeachers>
            </Header>

            <Main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </Main>
        </Container>
    );
}

export default TeacherList;