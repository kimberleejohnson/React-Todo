// Todo will be a functional component that takes in props so that the state data can change 

import React from 'react'; 

const Todo = props => {
    return (
        <div>
            <ul>
            <li>{props.toDo.task}</li>
            </ul>
        </div>
    );
};
  
export default Todo; 