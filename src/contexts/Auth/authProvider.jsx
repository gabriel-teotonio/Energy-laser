import { useEffect, useState } from "react"
import { createContext } from "react"
import { useAuth } from "../../hooks/useAuth"

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
   const [user, setUser] = useState(null)
   const [isLoading, setIsLoading] = useState(true); 
   const isAutenticated = !!user
   const authApi = useAuth()
   

   const validateToken = async () => {
      try {
         const storageData = localStorage.getItem("AUTH_TOKEN")
         if(storageData){
            const data = await authApi.validateToken(storageData)
            if(data?.user){
               setUser(data.user)
            }
         }
      }catch(error){
        await authApi.logout()
      }
      setIsLoading(false)
   }
   useEffect(() => {
      validateToken()
   }, [])

   const signin = async (user, password) => {
      const data = await authApi.signin(user, password)
      if(data.user && data.token){
         setUser(data.user)
         setToken(data.token)
         return true
      }
      return false
   }

   const signout = async () => {
      setUser(null)
      setToken("")
      await authApi.logout()
   }

   const setToken = (token) => {
      localStorage.setItem("AUTH_TOKEN", token)
   }

   return (
      <AuthContext.Provider value={{user, signin, signout, isLoading, isAutenticated}}>
         {children}
      </AuthContext.Provider>
   )
}

export const useContext = () => useContext(AuthContext)