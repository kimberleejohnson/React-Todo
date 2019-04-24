// Establishing my imports 
import React from "react";
import Todo from "./Todo"; 
import TodoForm from "./TodoForm"; 

// Building my array of to-do's 
const todos = [
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
  },
];

// Creating my Class component

// 1) Declaring the Class 

class TodoList extends React.Component {
    // 2) Adding my constructor function 
    constructor () {
        super(); 
        // Will add more to state 
        this.state = {
            todosOnState: todos,
            todo: {
                task: '',
                id: '',
                completed: false
            }
        };
    }


// Additional functions

// Adding an item to the list 
addToDo = event => {
    // Removing my page refresh 
    event.preventDefault();
    this.setState({
        todosOnState:
        [...this.state.todosOnState, this.state.todo],
        todo: {
            task: '',
            id: '',
            completed: false
        }
    });
};

// Making sure that item shows up on the list 
handleChanges = event => {
    this.setState({
        todo: {
            ...this.state.todo,
            [event.target.value]: event.target.task 
        }
    })
}

// 3) Render UI and return some JSX 
render() {
    return (
        <div>
            <h1>Kimberlee's to-do's</h1>

            <div>
                {this.state.todosOnState.map(todo =>
                (
                  <Todo todo={todo} />
                )  
                )}
            </div>

            <div>
                <TodoForm 
                value={this.state.todo.task} 
                onSubmit={this.addToDo}
                onChange={this.handleChanges}
                /> 
            </div>
        </div>
    );
}
}

export default TodoList; 
