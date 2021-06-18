import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { TextField } from '@material-ui/core';
import { CreateTripsForm } from './styles';
import { Link } from 'react-router-dom';
import { ButtonsForm } from './styles';
import ButtonStyle from '../../Components/ButtonStyle/ButtonStyle';

const CreateTripPage = () => {
    return <div>
        <PageTitle title={'Criar Viagem'}/>
        <CreateTripsForm>
            <TextField label={'Nome'}/>
            <TextField label={'Planeta'}/>
            <TextField label={'Data'}/>
            <TextField label={'Descrição'}/>
            <TextField label={'Duração em dias'}/>
            </CreateTripsForm>
            <ButtonsForm>
        <ButtonStyle button={'Criar'}/>
            <Link to="/admin">
            <ButtonStyle button={'Voltar'}/>
            </Link>
        </ButtonsForm>
    </div>
}

export default CreateTripPage;