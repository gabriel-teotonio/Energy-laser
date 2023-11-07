import { clientes } from "../../fakeDb";
import { Acao, Cabecalho, CabecalhoCelula, Celula, Linha, Tabela } from "./styles";

export const TabelaClientes = () => {
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
        {clientes.map((contato, index) => (
          <Linha key={index}>
            <Celula>{index}</Celula>
            <Celula>{contato.nome}</Celula>
            <Celula>{contato.telefone}</Celula>
            <Celula>{contato.cpf}</Celula>
            <Acao>
              <button>Editar</button>
              <button>Excluir</button>
            </Acao>
          </Linha>
        ))}
      </tbody>
    </Tabela>
  )
}
