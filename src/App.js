import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
 

import Header from './components/todos/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    //stores info about todos
    todos: [
      {
        id: 1,
        title: 'Ät bröd',
        completed: false
      },
      {
        id: 2,
        title: 'Köp bröd',
        completed: false
      },
      {
        id: 3,
        title: 'Ät bröd igen',
        completed: false
      }
    ]
  }

  //toggles todo.completed
  markComplete = (id) => {
    this.setState( { todos: this.state.todos.map(todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  addTodo = (title) => {
    const newTodo = {
      id: 4,
      //same as title = title in ES6
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] })
  }

  //returns all the todo items that don't have a matching id with the delete button id
  removeTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              //Empty tags is new short syntax for React.Fragment
              <>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  removeTodo={this.removeTodo}
                />
              </>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
