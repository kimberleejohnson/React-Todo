// Establishing my imports 
import React from "react";
import Todo from "./Todo"; 
import TodoForm from "./TodoForm"


// TodoList will be a functional component that takes in props so that the state data can change 

// It does not need to be a Class Component because App is covering that (big boss)


const TodoList = props => {
    return (
        <div>
            {props.toDos.map(toDo => (
                <Todo toDo={toDo}/> 
            ))}
        </div>

    );
};


export default TodoList; 
