// Todo will be a functional component that takes in props so that the state data can change 

import React from 'react'; 

const Todo = props => {
    return (        
        <ul style={props.toDo.completed ? { textDecoration: 'line-through'} : null}
        onClick={() => props.handleToggleStyle(props.toDo.id)} >   
            <li>{props.toDo.task}</li>
        </ul>
    );
};
  
export default Todo; 