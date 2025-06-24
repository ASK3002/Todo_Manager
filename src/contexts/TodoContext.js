import { useContext,createContext } from "react";

export const  TodoContext=createContext(
    {
        todos:[{
            id:1,
            todo:"TodoMsg",
            completed:false,
        }],
        todoAdd:(todo)=> {},
        todoDelete:(id)=> {},
        todoUpdate:(id,todo)=> {},
        toggleComplete:(id)=> {},
    }

);

export const useTodo=() => {
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider;