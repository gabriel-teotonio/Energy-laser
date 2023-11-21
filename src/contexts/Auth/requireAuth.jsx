import { useContext } from "react"
import { AuthContext } from "./authProvider"
import { Navigate, useLocation } from "react-router-dom"

export const RotaProtegida = ({children}) => {
   const { isAutenticated, isLoading, user } = useContext(AuthContext)
   const location = useLocation()
   if(isLoading){
      return <h2>CARREGANDO...</h2>
   }
   if(!isAutenticated || user.userType != "admin"){
      return <Navigate to={"/login"} state={{from: location}} replace/>
   }
   return children
 }

export const RotaProtegidaCliente = ({children}) => {
   const { isAutenticated, isLoading, user } = useContext(AuthContext)
   const location = useLocation()
   if(isLoading){
      return <h2>CARREGANDO...</h2>
   }
   if(!isAutenticated || user.userType != "cliente"){
      return <Navigate to={"/login"} state={{from: location}} replace/>
   }
   return children
 }

export const RotaProtegidaAdm = ({children}) => {
   const { user } = useContext(AuthContext)
   const location = useLocation()
   console.log(user.userType)
   if(user.userType === "admin"){
      return children
   }
   return <Navigate to={"/"} state={{from: location}} replace/>
 }

 
 