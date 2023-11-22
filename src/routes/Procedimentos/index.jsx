import React from 'react'
import { Container, NavBar } from '../Clientes/ListaCliente'
import { FormProcedimento } from '../../components/FormProcedimento'
import styled from 'styled-components'
import { procedimetosDb } from '../../fakeDb'
import { BtnLink } from '../../components/Buttons/btnLink'
import { useNavigate } from 'react-router-dom'

const Main = styled.main`
   display: flex;
   justify-content: space-between;
`
const ProcedList = styled.ul`
   list-style: none;
`
const ProcedItem = styled.li`
   font-size: 16px;
   font-weight: 500;
   border: #0000005b 1px solid;
   border-radius: 6px;
   padding: 12px;
   margin-top: .5rem;

   button{
      margin:0 4px;
      margin-top: .5rem;
      cursor: pointer;
      padding: 4px;
   }
`

export const Procedimento = () => {
   const navigate = useNavigate()
  return (
   <Container>
   <NavBar>
     <h4>Lista de procedimentos</h4>
     <BtnLink url={"/criarProcedimento"} btnTitle={"Criar procedimento"}/>
   </NavBar>
   <Main>
      <ProcedList>
         {
            procedimetosDb.map(proced => (
               <ProcedItem key={proced.id}>
                  <h3>{proced.nome}</h3>
                  <p>{proced.descricao}</p>
                  <button onClick={() => navigate(`/editarProcedimento/${proced.id}`)}>Editar</button>
                  <button>Excluir</button>
               </ProcedItem>
            ))
         }
      </ProcedList>
   </Main>
 </Container>
  )
}
