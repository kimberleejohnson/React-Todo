// My form will take in a user input. 

import React from 'react'; 

const TodoForm = props => {
    return (
    <form>
      
          <input className="inputButton"
            onChange={props.handleChanges}
            type="text"
            name="toDo"
            value={props.value}
            placeholder="...What do you have to do today?" 
          />
    
          <button className="add-btn" onClick={props.handleAddToDo}>+</button>
      
      

      <button className="done-btn" onClick={props.handleClearComplete}>Clear 'em out!</button>
    </form>
    );
  };

export default TodoForm; 