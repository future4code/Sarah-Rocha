import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import ButtonStyle from '../../Components/ButtonStyle/ButtonStyle';
import { Link } from 'react-router-dom';
import { ButtonsContainer } from './styles';
import { Card, CardContent} from '@material-ui/core';
import CardSub from '../../Components/CardSub/CardSub';
import CardTitle from '../../Components/CardTitle/CardTitle';

const AdminHomePage = () => {
    return <div>
        <PageTitle title={'Lista de Viagens'}/>
        <ButtonsContainer>
        <Link to={'/'}>
        <ButtonStyle button={'Voltar'}/>
        </Link>
        <Link to={'/criar-viagem'}>
        <ButtonStyle button={'Criar Viagem'}/>
        </Link>
        </ButtonsContainer>
        <Card>
      <CardContent>
        <CardTitle title={'Viagem para Marte'}/>
        <CardSub sub={'Nome: Viagem para Marte'}/>
        <CardSub sub={'Descrição: '}/>
        <CardSub sub={'Planeta: '}/>
        <CardSub sub={'Duração: '}/>
        <CardSub sub={'Data: '}/>
      </CardContent>
    </Card>
    <Card>
      <CardContent>
        <CardTitle title={'Viagem para Júpiter'}/>
        <CardSub sub={'Nome: Viagem para Júpiter'}/>
        <CardSub sub={'Descrição: '}/>
        <CardSub sub={'Planeta: '}/>
        <CardSub sub={'Duração: '}/>
        <CardSub sub={'Data: '}/>
      </CardContent>
    </Card>
    </div>
}

export default AdminHomePage