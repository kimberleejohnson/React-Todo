// I need to store state in this component so that it can pass down to child elements.

// Therefore, my change handlers also need to be stored here, so we can pass data down and back up through them via callback functions.

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
// import TodoForm from "./TodoForm"; 

// Step 1: declaring my Class
class App extends React.Component {
  // Step 2: Adding my Constructor
  constructor() {
    super();
    this.state = {
      // Storing all of my data within App
      toDos: [
        {
          task: "Build to-do app",
          id: 0,
          completed: false
        },
        {
          task: "Review training kit",
          id: 1,
          completed: false
        },
        {
          task: "Make Dolly Parton succulent holders",
          id: 2,
          completed: false
        }
      ],
      toDo: ""
    };
  }

  // // Function to add an item to the list 
  // addToDo = event => {
  //   // Removing my page refresh
  //   event.preventDefault();
  //   this.setState({
  //     todosOnState: [...this.state.todosOnState, this.state.todo],
  //     todo: {
  //       task: "",
  //       id: "",
  //       completed: false
  //     }
  //   });
  // };

  // // Function to make sure the new list item displays 
  // handleChanges = event => {
  //   this.setState({
  //     todo: {
  //       ...this.state.todo,
  //       [event.target.value]: event.target.task
  //     }
  //   });
  // };

  // Step 3: Rendering some UI and returning JSX
  render() {
    return (
      <div>
        <h1>Kimberlee's to-do list</h1>
        <TodoList toDos={this.state.toDos}/>
      </div>
    );
  }
}

// render() {
//   return (
//       <div>
//           <h1>Kimberlee's to-do's</h1>

//           <div>
//               {this.state.todosOnState.map(todo =>
//               (
//                 <Todo todo={todo} />
//               )  
//               )}
//           </div>

//           <div>
//               <TodoForm 
//               value={this.state.todo.task} 
//               onSubmit={this.addToDo}
//               onChange={this.handleChanges}
//               /> 
//           </div>
//       </div>
//   );
// }
// }

export default App;
