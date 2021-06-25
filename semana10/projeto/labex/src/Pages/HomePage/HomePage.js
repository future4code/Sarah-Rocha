import React from 'react'
import { Typography } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';
import ButtonStyle from '../../Components/ButtonStyle/ButtonStyle';

const HomePage = () => {
    return <div>
        <Typography variant="h1" align="center" gutterBottom>LabeX</Typography>
    <div>
        <ButtonsContainer>
        <Link to={'/login'}>
        <ButtonStyle button={'Área Administrativa'}/>
        </Link>
        <Link to={'/viagens'}>
        <ButtonStyle button={'Lista de Viagens'}/>
        </Link>
        </ButtonsContainer>
    </div>
    </div>
}

export default HomePage