import { Acao, Cabecalho, CabecalhoCelula, Celula, Linha, Tabela } from "./styles";

const contatos = [
   { nome: 'João', telefone: '123-456-7890', cpf: '123.456.789-01' },
   { nome: 'Maria', telefone: '987-654-3210', cpf: '987.654.321-09' },
   { nome: 'João', telefone: '123-456-7890', cpf: '123.456.789-01' },
   { nome: 'Maria', telefone: '987-654-3210', cpf: '987.654.321-09' },
   { nome: 'João', telefone: '123-456-7890', cpf: '123.456.789-01' },
   { nome: 'Maria', telefone: '987-654-3210', cpf: '987.654.321-09' },
   { nome: 'João', telefone: '123-456-7890', cpf: '123.456.789-01' },
   { nome: 'Maria', telefone: '987-654-3210', cpf: '987.654.321-09' },
 ];

export const TabelaClientes = () => {
  return (
   <Tabela>
      <Cabecalho>
        <tr>
          <CabecalhoCelula>Nome</CabecalhoCelula>
          <CabecalhoCelula>Telefone</CabecalhoCelula>
          <CabecalhoCelula>CPF</CabecalhoCelula>
          <CabecalhoCelula>Ação</CabecalhoCelula>
        </tr>
      </Cabecalho>
      <tbody>
        {contatos.map((contato, index) => (
          <Linha key={index}>
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
