import React from 'react';
import { TextField } from '@material-ui/core';
import { LoginForm } from './styles';
import { Link } from 'react-router-dom';
import { ButtonsForm } from './styles';
import PageTitle from '../../Components/PageTitle';
import { Button } from '@material-ui/core';
import ButtonStyle from '../Components/ButtonStyle/ButtonStyle';

const LoginPage = () => {
    return <div>
        <PageTitle title={'Login'}/>
        <LoginForm>
            <TextField label={'E-mail'} type={'email'}/>
            <TextField label={'Senha'} type={'password'}/>
            </LoginForm>
        <ButtonsForm>   
        <Button variant={'contained'} color={'primary'} type={'submit'}>Entrar</Button>
            <Link to="/">
            <ButtonStyle button={'Voltar'}/>
            </Link>
        </ButtonsForm> 
        </div>
}

export default LoginPage