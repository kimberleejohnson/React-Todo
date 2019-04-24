// Child of Parent to-do list 

import React from 'react'; 

const TodoForm = props => {
    return (
    <form>
      <input 
        placeholder="Add a new to-do" 
      // onChange={props.TodoChange}
      // value={props.task} 
      // onSubmit={props.onSubmit}
      
      />

      <button>Add to-do</button>
      <button>Clear completed</button>
    </form>
    );
  };

export default TodoForm; 