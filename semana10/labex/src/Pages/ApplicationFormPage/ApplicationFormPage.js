import React from 'react';
import PageTitle from '../../Components/PageTitle/PageTitle';
import { ApplicationForm } from './styles';
import { TextField } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ButtonsForm } from './styles';
import ButtonStyle from '../../Components/ButtonStyle/ButtonStyle';
import { InputLabel, Select, MenuItem } from '@material-ui/core';
import { FormControl } from '@material-ui/core';

const ApplicationFormPage = () => {
    return <div>
        <PageTitle title={'Inscreva-se para uma Viagem'}/>
        <ApplicationForm>
            <TextField label={'Seu nome'}/>
            <TextField label={'Idade'} type={'number'}/>
            <TextField label={'Conte-nos sobre você'} helperText="Por que você é um bom candidato(a)?"/>
            <TextField label={'Profissão'}/>
            
            <FormControl>
            <InputLabel id="select-país">País</InputLabel>
            <Select
          labelId="select-país"
          id="demo-simple-select"
        >
          <MenuItem value={'brasil'}>Brasil</MenuItem>
          <MenuItem value={'colômbia'}>Colômbia</MenuItem>
          <MenuItem value={'paquistão'}>Paquistão</MenuItem>
        </Select>
        </FormControl>

        <FormControl>
        <InputLabel id="select-viagem">Selecione sua viagem</InputLabel>
            <Select
          labelId="select-viagem"
          id="demo-simple-select"
        >
          <MenuItem value={'brasil'}>Viagem para Marte</MenuItem>
          <MenuItem value={'colômbia'}>Viagem para Júpiter</MenuItem>
        </Select>
        </FormControl>
            </ApplicationForm>
            <ButtonsForm>
        <ButtonStyle button={'Inscrever-se'}/>
            <Link to="/admin">
            <ButtonStyle button={'Voltar'}/>
            </Link>
        </ButtonsForm>
    </div>
}

export default ApplicationFormPage