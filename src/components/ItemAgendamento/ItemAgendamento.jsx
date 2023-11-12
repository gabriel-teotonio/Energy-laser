import styled from "styled-components"

export const Container = styled.li`
   list-style: none;
   padding: 0.5rem;
   border-radius: 4px;
   border: 1px solid rgba(97, 106, 137, 0.41);
   margin-top: .5rem;
`
export const ItemTopo = styled.div`
   display: flex;
   justify-content: space-between;

   span{
      color:#4C10F8;
   }
`

export const ItemAgendamento = () => {
  return (
   <Container>
      <ItemTopo>
         <p><strong>Pac: Luiza Andrade</strong></p>
         <span>10:00h</span>
      </ItemTopo>
      <p><strong>proced</strong>: Depilação a laser</p>
      <p><strong>Profissional</strong>: Wesley Felipe</p>
   </Container>
  )
}
