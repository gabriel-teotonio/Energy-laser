import styled from "styled-components";

export const Tabela = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const Cabecalho = styled.thead`
  background-color: #333;
  color: #fff;
`;

export const CabecalhoCelula = styled.th`
  padding: 10px;
  text-align: left;
  &:nth-last-child(1){
   text-align: center;
  }
`;

export const Linha = styled.tr`
  background-color: #f2f2f2;

  &:nth-child(even) {
    background-color: #fff;
  }
`;

export const Celula = styled.td`
  padding: 10px;
`;

export const Acao = styled.td`
  padding: 10px;
  text-align: center;

  button {
    background-color: #007bff;
    color: #fff;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
  }
`
