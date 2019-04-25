// I need to store state in this component so that it can pass down to child elements.

// Therefore, my change handlers also need to be stored here, so we can pass data down and back up through them via callback functions.

import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"; 

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
      toDo: " "
    };
  }

  // Function that when called adds an item to the list 
  addToDo = event => {
    // Removing my page refresh
    event.preventDefault();

    // Declaring a new Object to hold the user input 
    const newToDo = { task: this.state.toDo, id: Date.now(), completed: false}; 
    
    // Updating state 
    this.setState({
      toDos: [...this.state.toDos, newToDo],
      toDo: " "
      }); 
    };

 // Handle changes function that pairs with set state to update my state
 handleChanges = event => 
 this.setState({
   [event.target.name]: event.target.value }); 


 // Function that will toggle a strikethrough style on completed items 
 // It sets the state at the bottom because we need the change to affect the state. 
 
 // Passing in the id so the function know, in its loop of the new state of the array, that when the clicked toDo id matches the id it is on, to return an array with the clicked toDo having a special style 
 toggleToDoStyle = id => {
   this.setState({
     toDos: this.state.toDos.map(toDo => {
       if (id === toDo.id) {
         return {...toDo, completed: !toDo.completed}
       }else{
      // If it's not the toDo we're looking at, return the toDo untouched. 
       return toDo; 
      }
     })

   })
 }

 // Function that will clear all the completed items 
 clearComplete = event => {
   // Removing page refresh
   event.preventDefault(); 

   // Filtering out a new array with all items with completed set to "true" removed 
   let toDos = this.state.toDos.filter(toDo => !toDo.completed);
   this.setState({ toDos });
 };

 
  // Step 3: Rendering some UI and returning JSX
  render() {
    return (
      <div>
        <h1>Kimberlee's to-do list</h1>
        
        <TodoList 
        handleToggleStyle={this.toggleToDoStyle}
        toDos={this.state.toDos}/>

        <TodoForm 
        value={this.state.toDo}
        handleChanges={this.handleChanges}
        handleAddToDo={this.addToDo}
        handleClearComplete={this.clearComplete}
        /> 

      </div>
    );
  }
}

export default App;
