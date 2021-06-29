import { getByPlaceholderText, render } from "@testing-library/react"
import React from "react"
import axios from "axios"
import styled from "styled-components"

const CardUsuario = styled.div`
     border: 1px solid black;
     padding: 10px;
     margin: 10px;
     width: 300px;
     display: flex;
     justify-content: space-between;
     `

export default class TelaListaUsuarios extends React.Component {

    state = {
        usuarios: []
    }

componentDidMount() {
    this.pegarUsuarios()
}

    pegarUsuarios = () => {
        const url = "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users"
        axios.get(url, {
            headers: {
                Authorization: "sarah-rocha-paiva"
            }
        })

        .then((resposta) => {
            console.log(resposta)
            this.setState({usuarios: resposta.data})
        })

        .catch((erro) => {
          console.log(erro)
          alert("Ocorreu um erro! Tente de novo.")
        })
    }

    deletarUsuario = (id) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${id}`
        axios.delete(url, {
            headers: {
                Authorization: "sarah-rocha-paiva"
            }
        })

        .then((resposta) => {
            alert("Usuário deletado com sucesso!")
            this.pegarUsuarios()
        })

        .catch((erro) => {
            alert("Ocorreu um erro! Tente novamente.")
        })
    }

    render() {
        const listaUsuarios = this.state.usuarios.map((user) => {
            return <CardUsuario key={user.id}>
                {user.name}
                <button onClick={() => this.deletarUsuario(user.id)}>Apagar</button>
                </CardUsuario>
        })

        return(
            <div>
                <button onClick={this.props.irParaCadastro}>Ir para Cadastro</button>
                <h2>Lista de Usuários</h2>
                {listaUsuarios}
            </div>
        )
    }
}
