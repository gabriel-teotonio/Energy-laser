import styled from "styled-components"
import { ItemAgendamento } from "../../components/ItemAgendamento/ItemAgendamento"
import { BtnLink } from "../Home/home"

export const Container = styled.div`
   max-width: 500px;
`
export const ListaAgendamentos = styled.ul`
   margin-top: 1rem;
`
export const DayContainer = styled.div`
   margin-top: 1rem;
`
export const DateDay = styled.h3`
   font-size: 16px;
   font-weight: 500;
   background-color: #020f3d1b;
   border-radius: 6px;
   padding: 4px 8px;
   text-align: center;
`

export const ListaAgendamento = () => {
  return (
     <Container>
      <BtnLink to={"/agendar"}>Novo agendamento</BtnLink>
      <ListaAgendamentos>
         <h2>Todos os agendamentos</h2>
         <DayContainer>
            <DateDay>12/11/2023</DateDay>
            <ItemAgendamento />
         </DayContainer>
         <DayContainer>
            <DateDay>16/11/2023</DateDay>
            <ItemAgendamento />
            <ItemAgendamento />
         </DayContainer>
         <DayContainer>
            <DateDay>24/11/2023</DateDay>
            <ItemAgendamento />
         </DayContainer>
      </ListaAgendamentos>
    </Container>
  )
}
