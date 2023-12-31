import { useContext } from "react"
import { Box, Container } from "./styles"
import { AuthContext } from "../../contexts/Auth/authProvider"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { ErrorMessage } from "../../components/FormCliente/FormCliente"
import { useForm } from "react-hook-form"
import { Navigate, useNavigate } from "react-router-dom"
import logo from "../../imgs/logo-energy-laser.png"

const schema = yup.object({
   user: yup.string().required("Campo usuario é obrigatório! preencha"),
   password: yup.string().required("Campo senha é obrigatório! preencha"),
})

export const Login = () => {
   const { signin, isAutenticated, user } = useContext(AuthContext)
   const navigate = useNavigate()

   const {
      register,
      handleSubmit,
      formState: {errors},
   } = useForm({resolver: yupResolver(schema)})
   
   const onSubmit = async (data) => {
      const resAuth = await signin(data.user, data.password)
      console.log(resAuth)
      if(resAuth && user){
         if(user.userType === "admin" || user.userType === "atendente"){
            return <Navigate to="/"/>
         }
         else if(user.userType === "cliente"){
            return <Navigate to="/cliente/home"/>
         }
      }
   }
   // se estiver autenticado é redirecionado p/ o app
   if(user){
      if(user.userType === "admin" || user.userType === "atendente"){
         return <Navigate to="/"/>
      }
      else if(user.userType === "cliente"){
         return <Navigate to="/cliente/home"/>
      }
   }

  return (
    <Container>
      <header>
         <img src={logo} alt="logo img" />
      </header>
         
         <Box>
            <h3>Entrar na sua conta</h3>
            <form onSubmit={handleSubmit(onSubmit)}>
               <label>
                  Usuario
                  <input {...register("user")} type="text" placeholder="usuario@gmail.com" />
                  <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
               </label>
               <label>
                  Senha
                  <input {...register("password")} type="password" placeholder="Sua senha" />
                  <ErrorMessage>{errors.telefone?.message}</ErrorMessage>
               </label>
               <a href="#">Esqueci minha senha</a>
               <button type="submit" onClick={onSubmit}>Entrar</button>
            </form>
         </Box>
    </Container>
  )
}
