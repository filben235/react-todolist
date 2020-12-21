import { Component } from 'react';
import './App.css';
import Todos from './components/Todos'


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
  
  render() {
    return (
      <div className="App">
        <h1>App</h1>
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
