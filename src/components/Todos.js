import { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {

  render() {
    return this.props.todos.map((todo) => (
      <TodoItem 
        key = {todo.id} 
        todo={todo} 
        markComplete={this.props.markComplete}
        removeTodo={this.props.removeTodo}
      />
    ));
  }
}

//checks that supplied props are of the right type
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
