import React from 'react'
import { TabelaProfissional } from '../../components/TabelaProfissionais/TabelaClientes'
import { Container, NavBar } from '../Clientes/ListaCliente'
import { BtnLink } from '../../components/Buttons/btnLink'

export const Profissionais = () => {
  return (
    <Container>
      <NavBar>
        <h4>Lista de Profissionais</h4>
        <BtnLink url={"/criarProfissional"} btnTitle={"Criar novo profissional"}/>
      </NavBar>
      <TabelaProfissional />
    </Container>
  )
}
