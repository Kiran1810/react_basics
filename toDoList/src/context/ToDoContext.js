import {createContext, useContext} from "react"

 export const toDoContext= createContext({
  todos:[{
    id:1 ,
    todo:"ToDo msg",
    completed : false
    
  }],

addTodo:(todo)=>{},
updateTodo:(id,todo)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}


 })

 export const useTodo=() =>{
   return  useContext(toDoContext)
 }

  export const TodoProvider = toDoContext.Provider

