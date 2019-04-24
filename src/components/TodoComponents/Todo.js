// Child of Parent TodoList

import React from 'react'; 

function Todo(props) {
    return (
        <div>
            <ul>
                <li>{props.todo.task}</li>
            </ul>
        </div>
    )
}
export default Todo; 