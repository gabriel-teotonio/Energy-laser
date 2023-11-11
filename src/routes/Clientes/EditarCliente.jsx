import { useNavigate, useParams } from "react-router-dom"
import { FormCliente } from "../../components/FormCliente/FormCliente"
import { clientes } from "../../fakeDb"

export const EditarCliente = () => {
  const {id} = useParams()
  const navigate = useNavigate()
   const handleEditClient = (dadosAtualizados) => {
      const indexCliente = clientes.findIndex(cliente => cliente.id === parseInt(id))
      if(indexCliente !== -1){
        clientes[indexCliente].nome = dadosAtualizados.nome
        clientes[indexCliente].telefone = dadosAtualizados.telefone
        clientes[indexCliente].cpf = dadosAtualizados.cpf
        clientes[indexCliente].genero = dadosAtualizados.genero
        
        alert("cliente atualizado com sucesso!")
        navigate("/clientes")
      }else{
        console.log('cliente nao encontrado')
      }
   }

  return (
    <>
      <h3>Atualizar informações do cliente</h3>
      <FormCliente btnTitle={"Editar cliente"} onAction={handleEditClient}/>
    </>
  )
}
