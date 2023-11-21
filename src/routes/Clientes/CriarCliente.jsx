import { clientes } from "../../fakeDb"
import { FormCliente } from "../../components/FormCliente/FormCliente"

export const CriarCliente = () => {
   const onSubmit = (data) => {
      console.log(data)
      clientes.push(data)
      alert("cliente criado com sucesso!")
   }

  return (
    <div>
      <h3>Criar novo cliente</h3>
     <FormCliente 
     btnTitle={"Criar cliente"} 
     onAction={onSubmit}
     isAdmin={true}
     />
    </div>
  )
}
