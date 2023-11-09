import { useNavigate } from "react-router-dom";
import { clientes } from "../../fakeDb";
import { Acao, Cabecalho, CabecalhoCelula, Celula, Linha, Tabela } from "./styles";

export const TabelaClientes = () => {
  const navigate = useNavigate()

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
        {clientes.map((cliente, index) => (
          <Linha key={index}>
            <Celula>{cliente.id}</Celula>
            <Celula>{cliente.nome}</Celula>
            <Celula>{cliente.telefone}</Celula>
            <Celula>{cliente.cpf}</Celula>
            <Acao>
              <button onClick={() => navigate(`/editarCliente/${cliente.id}`)}>Editar</button>
              <button>Excluir</button>
            </Acao>
          </Linha>
        ))}
      </tbody>
    </Tabela>
  )
}
