
export const useAuth = () => ({
   validateToken: async (token) => {
      if(token === "hAHSsdnKsjdf"){
         return {
            user: {id:"3",name:"jose maria", email:"jose@gmail.com" }
         };
      }
      // const response = await authApi.post("/validate", {token})
      // return response.data;
   },
   signin: async (user, password) => {
      return {
         user: {id:"3",nome:"jose maria", user:"jose4532"},
         token: "hAHSsdnKsjdf"
      }
      const response = await authApi.post("/signin", {email, password})
      return response.data;
   },
   logout: async () => {
      return {status: true}
      const response = await authApi.post("/logout")
      return response.data;
   }
})