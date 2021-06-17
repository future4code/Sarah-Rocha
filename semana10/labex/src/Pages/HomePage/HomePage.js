import React from 'react'
import { Typography } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ButtonsContainer } from './styles';
import { Link } from 'react-router-dom';

const HomePage = () => {
    return <div>
        <Typography variant="h1" align="center" gutterBottom>LabeX</Typography>
    <div>
        <ButtonsContainer>
        <Link to={'/login'}>
        <Button variant={'contained'} color={'primary'}>Área Administrativa</Button>
        </Link>
        <Link to={'/viagens'}>
        <Button variant={'contained'} color={'primary'}>Lista de Viagens</Button>
        </Link>
        </ButtonsContainer>
    </div>
    </div>
}

export default HomePage