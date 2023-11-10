import { useContext } from "react"
import { AuthContext } from "./authProvider"
import { Navigate, useLocation } from "react-router-dom"

export const RotaProtegida = ({children}) => {
   const { isAutenticated, isLoading } = useContext(AuthContext)
   const location = useLocation()
   if(isLoading){
      return <h2>CARREGANDO...</h2>
   }
   if(!isAutenticated){
      return <Navigate to={"/login"} state={{from: location}} replace/>
   }
   return children
 }
 