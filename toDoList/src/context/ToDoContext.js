import React,{useContext} from "react"

 export const toDoContext= React.createContext({
  todos:[{
    id:1 ,
    todo:"ToDo msg",
    completed : false
    
  }],

addTodo:(todo)=>{},
updateTodo:(todo,id)=>{},
deleteTodo:(id)=>{},
toggleComplete:(id)=>{}


 })

 export const useTodo=() =>{
   return  useContext(toDoContext)
 }

  export const TodoProvider = toDoContext.Provider

