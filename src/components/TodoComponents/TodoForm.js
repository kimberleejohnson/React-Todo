// Child of Parent to-do list 

import React from 'react'; 

const TodoForm = props => {
    return (
    <form>
      <input 
        placeholder="Add a new to-do" 
        type="text"
        name="toDo"
        // value={props.value}
      />

      <button>Add to-do</button>
      <button>Clear completed</button>
    </form>
    );
  };

export default TodoForm; 