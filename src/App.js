import { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios';
 
import Welcome from './components/pages/Welcome';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';

import './App.css';

class App extends Component {
  state = {
    //stores info about todos
    todos: [],
    isSignedIn: false
  }

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

  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
  }

  //returns all the todo items that don't have a matching id with the delete button id
  removeTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
          <Header />
            <Route exact path="/" component={Welcome} />
            <Route path="/about" component={About} />
            <Route path="/main" render={props => (
              <>
                <NavBar isSignedIn={this.state.isSignedIn}/>
                <AddTodo addTodo={this.addTodo}/>
                <Todos 
                  todos={this.state.todos}
                  markComplete={this.markComplete}
                  removeTodo={this.removeTodo}
                />
              </>
            )} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
