import React, { useState, FormEvent } from 'react';
import { useHistory } from 'react-router-dom';

import { Container, Main, Fieldset, Legend, Footer, Button, SubmitButton, ScheduleItem } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

import api from '../../services/api';

const TeacherForm: React.FC = () => {
    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: ''}
    ]);

    const [ name, setName ] = useState('');
    const [ avatar, setAvatar ] = useState('');
    const [ whatsapp, setWhatsapp ] = useState('');
    const [ bio, setBio ] = useState('');
    const [ subject, setSubject ] = useState('');
    const [ cost, setCost ] = useState('');

    const history = useHistory();

    async function handleCreateClass(e: FormEvent) {
        try {
            e.preventDefault();

            await api.post('/classes', { 
                name, 
                avatar, 
                whatsapp, 
                bio, 
                subject, 
                cost: Number(cost), 
                schedule: scheduleItems 
            });
            alert('Cadastro realizado com sucesso!');
            history.push('/');
        } catch(err) {
            alert('Algo errado com o cadastro! Tente novamente mais tarde!');
            console.log(err);
        }
    }

    function setScheduleItemValue(position: number, field: string, value: string) {
        const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
            if(index === position) {
                return { ...scheduleItem, [field]: value }
            }

            return scheduleItem;
        });
        setScheduleItems(updatedScheduleItems);
    }

    function addNewScheduleItem() {
        setScheduleItems([
            ...scheduleItems,
            { week_day: 0, from: '', to: '' }
        ])
    }

    return (
        <Container>
            <Header 
                title="Que incrível que você quer dar aulas!"
                description="O primeiro passo é preencher esse formulário de inscrição"
            />
            <Main>
                <form onSubmit={ handleCreateClass }>
                    <Fieldset>
                        <Legend>Seus dados</Legend>

                        <Input 
                            label='Nome Completo' 
                            name='name' 
                            value={ name } 
                            onChange={ e => setName(e.target.value) } 
                        />
                        <Input 
                            label='Avatar' 
                            name='avatar' 
                            value={ avatar }
                            onChange={ e => setAvatar(e.target.value) }
                        />
                        <Input 
                            label='WhatsApp' 
                            name='whatsapp' 
                            value={ whatsapp }
                            onChange={ e => setWhatsapp(e.target.value) }
                        />
                        <Textarea 
                            label='Biografia' 
                            name='bio'
                            value={ bio }
                            onChange={ e => setBio(e.target.value) }
                        />
                    </Fieldset>

                    <Fieldset>
                        <Legend>Sobre a aula</Legend>

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
                        <Input 
                            label='Custo da sua hora por aula' 
                            name='cost'
                            value={ cost }
                            onChange={ e => setCost(e.target.value) } 
                        />
                    </Fieldset>

                    <Fieldset>
                        <Legend>
                            Horários disponíveis
                            <Button type="button" onClick={ addNewScheduleItem }>+ Novo horário</Button>
                        </Legend>

                        { scheduleItems && scheduleItems.map((scheduleItem, index) => (
                            <ScheduleItem key={ scheduleItem.week_day }>
                                <Select 
                                    label='Dia da semana' 
                                    name='week_day' 
                                    value={ scheduleItem.week_day }
                                    onChange={ e => setScheduleItemValue(index, 'week_day', e.target.value) }
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
                                    label='Das' 
                                    name='from' 
                                    type='time'
                                    value={ scheduleItem.from }
                                    onChange={ e => setScheduleItemValue(index, 'from', e.target.value) }
                                />
                                <Input 
                                    label='Até' 
                                    name='to' 
                                    type='time' 
                                    value={ scheduleItem.to }
                                    onChange={ e => setScheduleItemValue(index, 'to', e.target.value) }
                                />
                            </ScheduleItem>
                        )) }
                    </Fieldset>

                    <Footer>
                        <p>
                            <img src={ warningIcon } alt="Aviso importante!"/>
                            Importante! <br />
                            Preencha todos os dados
                        </p>
                        <SubmitButton type="submit">Salvar cadastro</SubmitButton>
                    </Footer>
                </form>
            </Main>
        </Container>
    );
}

export default TeacherForm;