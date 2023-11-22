import { useNavigate } from "react-router-dom";
import { clientes, profissionaisDb } from "../../fakeDb";
import { Acao, Cabecalho, CabecalhoCelula, Celula, Linha, Tabela } from "./styles";
import { useState } from "react";

export const TabelaProfissional = () => {
  const navigate = useNavigate()
  const [listProfissional, setListProfissional] = useState(profissionaisDb)
  
  const handleDeleteProfissional = (id) => {
    const currentProfissional = listProfissional.find(profissional => profissional.id === id)
    const resDelete = confirm(`Deseja exclui o cliente ${currentProfissional.nome}?`)
    if(resDelete){
      let newList = listProfissional.filter(profissional => profissional.id !== id)
      setListProfissional(newList)
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
        {listProfissional.map((profissional, index) => (
          <Linha key={index}>
            <Celula>{profissional.id}</Celula>
            <Celula>{profissional.nome}</Celula>
            <Celula>{profissional.telefone}</Celula>
            <Celula>{profissional.cpf}</Celula>
            <Acao>
              <button onClick={() => navigate(`/editarProfissional/${profissional.id}`)}>Editar</button>
              <button onClick={() => handleDeleteProfissional(profissional.id)}>Excluir</button>
            </Acao>
          </Linha>
        ))}
      </tbody>
    </Tabela>
  )
}
