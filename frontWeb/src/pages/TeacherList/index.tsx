import React, { useState, FormEvent } from 'react';

import Header from '../../components/Header';
import TeacherItem, { Teacher } from '../../components/TeacherItem';
import Input from '../../components/Input';
import Select from '../../components/Select';

import { Container, SearchTeachers, Main, Button } from './styles';

import api from '../../services/api';

const TeacherList: React.FC = () => {
    const [ subject, setSubject ] = useState('');
    const [ time, setTime ] = useState('');
    const [ weekDay, setWeekDay ] = useState('');
    const [ teachers, setTeachers ] = useState([]);

    async function handleSearchTeachers(e: FormEvent) {
        try {
            e.preventDefault();
            console.log({ subject, time, weekDay });

            const res = await api.get('/classes', {
                params: {
                    subject,
                    week_day: weekDay,
                    time
                }
            });

            const teacherList = res.data;
            setTeachers(teacherList);
        } catch(err) {
            console.log(err);
            alert('Tente novamente mais tarde');
        }
    }

    return (
        <Container>
            <Header title="Esses são os proffys disponíveis.">
                <SearchTeachers onSubmit={ handleSearchTeachers }>
                    <Select 
                        label='Matéria' 
                        name='subject' 
                        value={ subject }
                        onChange={ e => setSubject(e.target.value) }
                        options={[
                            { value: 'Artes', label: 'Artes' },
                            { value: 'Biologia', label: 'Biologia' },
                            { value: 'Ciências', label: 'Ciências' },
                            { value: 'Educação Física', label: 'Educação Física' },
                            { value: 'Física', label: 'Física' },
                            { value: 'Geografia', label: 'Geografia' },
                            { value: 'História', label: 'História' },
                            { value: 'Matemática', label: 'Matemática' },
                            { value: 'Português', label: 'Português' },
                            { value: 'Química', label: 'Química' },
                        ]}    
                    />

                    <Select 
                        label='Dia da semana' 
                        name='week_day' 
                        value={ weekDay }
                        onChange={ e => setWeekDay(e.target.value) }
                        options={[
                            { value: '0', label: 'Domingo' },
                            { value: '1', label: 'Segunda-feira' },
                            { value: '2', label: 'Terça-feira' },
                            { value: '3', label: 'Quarta-feira' },
                            { value: '4', label: 'Quinta-feira' },
                            { value: '5', label: 'Sexta-feira' },
                            { value: '6', label: 'Sábado' },
                        ]}    
                    />
                    <Input 
                        label='Hora' 
                        name='time' 
                        type="time" 
                        value={ time }
                        onChange={ e => setTime(e.target.value) }
                    />
                    <Button type="submit">Buscar</Button>
                </SearchTeachers>
            </Header>

            <Main>
                { teachers.map((teacher: Teacher) => (
                    <TeacherItem key={ teacher.id } teacher={ teacher }/>
                )) }
            </Main>
        </Container>
    );
}

export default TeacherList;