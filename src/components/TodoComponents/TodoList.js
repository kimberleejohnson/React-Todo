// Establishing my imports 
import React from "react";
import Todo from "./Todo"; 


// TodoList will be a functional component that takes in props so that the state data can change 

// It does not need to be a Class Component because App is covering that (big boss)


const TodoList = props => {
    return (
        <div>
            {props.toDos.map((toDo, index) => (
                <Todo key={index} toDo={toDo}/> 
            ))}
        </div>

    );
};

export default TodoList; 
