import styled from "styled-components"
import { TabelaClientes } from "../../components/TabelaClientes/TabelaClientes"

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
  button{
    background-color: #F8104F;
    color: #fff;
    border: none;
    padding: 0px 10px;
    border-radius: 4px;
    height: 40px;
    cursor: pointer;
    text-transform: uppercase;
  }
`

export const ListaCliente = () => {
  return (
    <Container>
      <NavBar>
        <h4>Lista de cliente</h4>
        <button>Criar novo cliente</button>
      </NavBar>
      <TabelaClientes />
    </Container>
  )
}
