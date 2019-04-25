// My form will take in a user input. 

import React from 'react'; 

const TodoForm = props => {
    return (
    <form>
      <input 
        onChange={props.handleChanges}
        type="text"
        name="toDo"
        value={props.value}
        placeholder="Add a new to-do" 
      />

      <button onClick={props.handleAddToDo}>Add somethin'</button>
      <button onClick={props.handleClearComplete}>Did somethin'</button>
    </form>
    );
  };

export default TodoForm; 