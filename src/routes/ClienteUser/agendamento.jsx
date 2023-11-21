import styled from "styled-components"
import { FieldBox } from "../../components/FormCliente/FormCliente"
import 'react-calendar/dist/Calendar.css';
import { useState } from "react";
import { FormAgendamento } from "../../components/FormAgendamento/FormAgendamento";
import { Link } from "react-router-dom";

export const Container = styled.div`
  header{
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;

    a{
      text-decoration: none;
      color: currentColor;
    }
  }
  h2{
    font-size: 1.2rem;
  }
`

export const Agendamento = () => {
  return (
    <Container>
      <header>
        <h2>Agendar um procedimento</h2>
        <Link to="/cliente/home">Cancelar</Link>
      </header>
      <FormAgendamento />
    </Container>
  )
}
