import { Link } from "react-router-dom"
import styled from "styled-components"

export const Container = styled.div`
   width: 500px;
`
export const ButtonsAction = styled.div`
   display: flex;
   gap: .5rem;
   margin-top: .5rem;
`
export const ContainerAtalho = styled.div`
   padding: 1rem;
   background-color: #F1F1F3;
   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.12);
   border-radius: 6px;
`

export const BtnLink = styled(Link)`
    background-color: #4C10F8;
    color: #fff;
    border: none;
    padding: 0px 10px;
    width: 300px;

    border-radius: 4px;
    height: 40px;
    text-transform: uppercase;
    text-decoration: none;

    display: flex;
    align-items: center;
    justify-content: center;
`

export const ResumoAgendamento = styled.div`
   padding: 1rem;
   margin-top: 1rem;
   background-color: #F1F1F3;
   box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.12);
   border-radius: 6px;
`
export const ResumoTopo = styled.div`
   display: flex;
   justify-content: space-between;
   margin-bottom: 1rem;
`
export const DateToday = styled.span`
   border-radius: 4px;
   background: rgba(2, 15, 61, 0.05);
   backdrop-filter: blur(2px);
   color: #020F3D;
   padding: 1px 10px;
`
export const ListaAgendamentos = styled.ul`
   
`
export const ItemAgendamento = styled.li`
   list-style: none;
   padding: 0.5rem;
   border-radius: 4px;
   border: 1px solid rgba(97, 106, 137, 0.41);
`
export const ItemTopo = styled.div`
   display: flex;
   justify-content: space-between;

   span{
      color:#4C10F8;
   }
`

export const Home = () => {
  return (
   <Container>
   <ContainerAtalho>
   <h4>Ações rápidas</h4>
   <ButtonsAction>
      <BtnLink role="button" type="button">Novo cliente</BtnLink>
      <BtnLink role="button" type="button">Novo agendamento</BtnLink>
   </ButtonsAction>
   </ContainerAtalho>
   <ResumoAgendamento>
      <ResumoTopo>
         <h3>Agendamentos de hoje</h3>
         <DateToday>12/11/2023</DateToday>
      </ResumoTopo>
      <ListaAgendamentos>
         <ItemAgendamento>
            <ItemTopo>
               <p><strong>Pac: Luiza Andrade</strong></p>
               <span>10:00h</span>
            </ItemTopo>
            <p><strong>proced</strong>: Depilação a laser</p>
            <p><strong>Profissional</strong>: Wesley Felipe</p>
         </ItemAgendamento>
      </ListaAgendamentos>
   </ResumoAgendamento>
   </Container>
  )
}
