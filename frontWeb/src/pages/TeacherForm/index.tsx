import React, { useState } from 'react';

import { Container, Main, Fieldset, Legend, Footer, Button, SubmitButton, ScheduleItem } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm: React.FC = () => {
    const [ scheduleItems, setScheduleItems ] = useState([
        { week_day: 0, from: '', to: ''}
    ]);

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
                <Fieldset>
                    <Legend>Seus dados</Legend>

                    <Input label='Nome Completo' name='name' />
                    <Input label='Avatar' name='avatar' />
                    <Input label='WhatsApp' name='whatsapp' />
                    <Textarea label='Biografia' name='bio'/>
                </Fieldset>

                <Fieldset>
                    <Legend>Sobre a aula</Legend>

                    <Select 
                        label='Matéria' 
                        name='subject' 
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
                    <Input label='Custo da sua hora por aula' name='cost' />
                </Fieldset>

                <Fieldset>
                    <Legend>
                        Horários disponíveis
                        <Button type="button" onClick={ addNewScheduleItem }>+ Novo horário</Button>
                    </Legend>

                    { scheduleItems && scheduleItems.map((scheduleItem: any) => (
                        <ScheduleItem key={ scheduleItem.week_day }>
                            <Select 
                                label='Dia da semana' 
                                name='week_day' 
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
                            <Input label='Das' name='from' type='time'/>
                            <Input label='Até' name='to' type='time' />
                        </ScheduleItem>
                    )) }
                </Fieldset>

                <Footer>
                    <p>
                        <img src={ warningIcon } alt="Aviso importante!"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <SubmitButton type="button">Salvar cadastro</SubmitButton>
                </Footer>
            </Main>
        </Container>
    );
}

export default TeacherForm;