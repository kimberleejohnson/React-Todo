// I need to store state in this component so that it can pass down to child elements. 

// Therefore, my change handlers also need to be stored here, so we can pass data down and back up through them via callback functions. 

import React from 'react';
import TodoList from './components/TodoComponents/TodoList';


// Step 1: declaring my Class 
class App extends React.Component {
  // Step 2: Adding my Constructor 
  constructor() {
    super();
    this.state = {
      // Storing all of my data within App 
      toDos: [
        {
          task: 'Build to-do app',
          id: 0,
          completed: false
        }, 
        {
          task: 'Review training kit',
          id: 1,
          completed: false
        },
        {
          task: 'Make Dolly Parton succulent holders',
          id: 2,
          completed: false
        }
      ],
      toDo: ''
    };
  }

  // Step 3: Rendering some UI and returning JSX 
  render() {
    return (
      <div>
        <TodoList /> 
      </div>
    );
  }
}

export default App;
