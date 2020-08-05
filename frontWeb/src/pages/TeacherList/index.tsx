import React from 'react';

import Header from '../../components/Header';
import TeacherItem from '../../components/TeacherItem';

import { Container, InputBlock, Label, Input, SearchTeachers, Main } from './styles';

const TeacherList: React.FC = () => {
    return (
        <Container>
            <Header title="Esses são os proffys disponíveis.">
                <SearchTeachers>
                    <InputBlock>
                        <Label htmlFor="subject">Matéria</Label>
                        <Input type="text" id="subject"/>
                    </InputBlock>

                    <InputBlock>
                        <Label htmlFor="week_day">Dia da semana</Label>
                        <Input type="text" id="week_day"/>
                    </InputBlock>

                    <InputBlock>
                        <Label htmlFor="subject">Matéria</Label>
                        <Input type="text" id="subject"/>
                    </InputBlock>
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