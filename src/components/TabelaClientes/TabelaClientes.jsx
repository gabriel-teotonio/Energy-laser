import { useNavigate } from "react-router-dom";
import { clientes } from "../../fakeDb";
import { Acao, Cabecalho, CabecalhoCelula, Celula, Linha, Tabela } from "./styles";
import { useState } from "react";

export const TabelaClientes = () => {
  const navigate = useNavigate()
  const [listCliente, setListCliente] = useState(clientes)
  
  const handleDeleteCliente = (id) => {
    const currentCliente = clientes.find(cliente => cliente.id === id)
    const resDelete = confirm(`Deseja exclui o cliente ${currentCliente.nome}?`)
    if(resDelete){
      let newList = listCliente.filter(cliente => cliente.id !== id)
      setListCliente(newList)
    }
  }

  return (
   <Tabela>
      <Cabecalho>
        <tr>
          <CabecalhoCelula>ID</CabecalhoCelula>
          <CabecalhoCelula>Nome</CabecalhoCelula>
          <CabecalhoCelula>Telefone</CabecalhoCelula>
          <CabecalhoCelula>CPF</CabecalhoCelula>
          <CabecalhoCelula>Ação</CabecalhoCelula>
        </tr>
      </Cabecalho>
      <tbody>
        {listCliente.map((cliente, index) => (
          <Linha key={index}>
            <Celula>{cliente.id}</Celula>
            <Celula>{cliente.nome}</Celula>
            <Celula>{cliente.telefone}</Celula>
            <Celula>{cliente.cpf}</Celula>
            <Acao>
              <button onClick={() => navigate(`/editarCliente/${cliente.id}`)}>Editar</button>
              <button onClick={() => handleDeleteCliente(cliente.id)}>Excluir</button>
            </Acao>
          </Linha>
        ))}
      </tbody>
    </Tabela>
  )
}
