import conf from "../conf.js"
import { Client, Account, ID } from "appwrite";

export class AuthService{
 client = new Client();
account;


 constructor(){
    this.client
    .setEndpoint(conf.appWriteUrl)
    .setProject(conf.appWriteProjectId);   
    this.account = new Account(this.client); 
    
 }


 async createAccount({email,password,name}){
      try{
         const userAccount= await this.account.create(ID.unique(),email,password,name);
         if(userAccount){
            // call another method
        return this.login(email, password);

   }
          else{
            return userAccount; 

   }
}
      catch(error){
         throw error;
}

 }

 async login({email,password}){
   try{
     const  signIn= await this.account.createEmailSession(email,password);
      return signIn;
   }
   catch(error){
     throw error;
   }
}

async getCurrentUser(){
   try{
   const user= await this.account.get();
   return user;
   }
   catch(error){
      console.log("there is the error in getting the user" , error);
   } 
   return null;
}

async logout(){
   try{
      const signOut = await this.account.deleteSession();
      return signOut;
   }
   catch(error){
      throw error;
   }
   return null;
}

}
*
const authService = new AuthService()

export default authService