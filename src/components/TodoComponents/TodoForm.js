// Child of Parent to-do list 

import React from 'react'; 

const TodoForm = props => {
    return (
    <form>
      <input 
      onChange={props.TodoChange}
      placeholder="New to-do" 
      value={props.task} 
      onSubmit={props.onSubmit}
      
      />

      <button>Add to-do</button>
      <button>Clear completed</button>
    </form>
    );
  };

export default TodoForm; 