import styled from "styled-components"
import { FieldBox } from "../../components/FormCliente/FormCliente"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { FormAgendamento } from "../../components/FormAgendamento/FormAgendamento";

export const Container = styled.div``

export const Agendamento = () => {
  return (
    <Container>
      <h2>Agendar um procedimento</h2>
      <FormAgendamento />
    </Container>
  )
}
