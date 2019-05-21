import React, { Component } from 'react';
import './Todo.css';

class TodoInput extends Component {
  state = {
    title: ''
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: ''});
  }
  
  onChange = (e) => this.setState({ title: e.target.value });

  render() {  
    return (
      <form onSubmit={this.onSubmit} style={todoinputStyle}>
        <input 
            type="text" 
            name="title"
            placeholder="Add Todo ..."
            value={this.state.title}
            onChange={this.onChange}
            className="input"
        />
        <input 
            type="submit" 
            value="+" 
            className="btn add"
        />
      </form>
    )
  }
}

const todoinputStyle = {
    // border: '1px #ccc solid',
    display: 'flex'
}




export default TodoInput;