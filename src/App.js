import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';

import {ContextProvider} from './components/ContextProvider';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import './App.css';
import SignIn from './components/SignIn';
import Main from './components/Main';

class App extends Component {
  state = {
    todos: []
  }

  //gets todo items from jsonplaceholder
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
    .then(res => this.setState({ todos: res.data }))
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

  //adds a todo to the list
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  //removes the todo item that matches the delete button id
  removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }
  
  render() {
    return (
      <ContextProvider>
        <Router>
          <div className="App">
            <div className="container">
              <Route path='/main' component={Main} />
              <Route exact path='/' component={SignIn} />
            </div>
          </div>
        </Router>
      </ContextProvider>
    );
  }
}

export default App;
