import React from 'react';

import { Container, Main, Fieldset, Legend, Footer, Button } from './styles';
import Header from '../../components/Header';
import Input from '../../components/Input';

import warningIcon from '../../assets/images/icons/warning.svg';

const TeacherForm: React.FC = () => {
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
                </Fieldset>

                <Fieldset>
                    <Legend>Sobre a aula</Legend>

                    <Input label='Matéria' name='subject' />
                    <Input label='Custo da sua hora por aula' name='cost' />
                </Fieldset>

                <Footer>
                    <p>
                        <img src={ warningIcon } alt="Aviso importante!"/>
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <Button type="button">Salvar cadastro</Button>
                </Footer>
            </Main>
        </Container>
    );
}

export default TeacherForm;