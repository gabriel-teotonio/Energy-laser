import styled from "styled-components"
import { TabelaClientes } from "../../components/TabelaClientes/TabelaClientes"
import { Link, Navigate } from "react-router-dom"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`
export const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4{
    font-size: 1.5rem;
  }
`

const BtnLink = styled(Link)`
    background-color: #F8104F;
    color: #fff;
    border: none;
    padding: 0px 10px;

    border-radius: 4px;
    height: 40px;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
`

export const ListaCliente = () => {
  return (
    <Container>
      <NavBar>
        <h4>Lista de cliente</h4>
        <BtnLink role="button" type="button" to={"/criarCliente"}>Criar novo cliente</BtnLink>
      </NavBar>
      <TabelaClientes />
    </Container>
  )
}
