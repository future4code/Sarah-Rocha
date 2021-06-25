import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { TextField } from '@material-ui/core';
import { CreateTripsForm } from './styles';
import { Link } from 'react-router-dom';
import { ButtonsForm } from './styles';
import ButtonStyle from '../../Components/ButtonStyle/ButtonStyle';
import { KeyboardDatePicker} from '@material-ui/pickers';

const CreateTripPage = () => {
    return <div>
        <PageTitle title={'Criar Viagem'}/>
        <CreateTripsForm>
            <TextField label={'Nome'}/>
            <TextField label={'Planeta'}/>
            <KeyboardDatePicker
              disableToolbar
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              label="Data"
        />
            <TextField label={'Descrição'}/>
            <TextField label={'Duração em dias'} type={'number'}/>
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