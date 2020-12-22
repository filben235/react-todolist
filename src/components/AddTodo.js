import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  state = {
    title: ''
  }

  onInputChange = (e) => this.setState({ title:e.target.value })

  onSubmitPress = (e) => {
    //prevents default submission 
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: '' });
  }

  render() {
    return (
      <form onSubmit={this.onSubmitPress} style={{display: 'flex'}}>
        <input 
          type="text" 
          name="title" 
          placeholder="add todo..."
          style={{flex: '10', padding: '5px'}}
          onChange={this.onInputChange}
        />
        <input 
        type="submit" 
        value="submit"
        className="btn"
        style={{flex: '1'}}
        />
      </form>
    )
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
