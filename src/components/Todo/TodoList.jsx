import React, { Component } from 'react'
import Todo from './Todo';
import PropTypes from 'prop-types';

class TodoList extends Component {



  render() {
    return (
      <div style={todolistStyle}>
        {this.props.todos.map(todo =>
          <Todo 
            todo={todo}
            key={todo.id}
            value={todo.value}
            isCompleted={todo.isCompleted}
            toggleComplete={this.props.toggleComplete}
            id={todo.id}
            delTodo={this.props.delTodo}
          />
          )}
      </div>
    )
  }
}

const todolistStyle = {
  margin: '1em 0 1em 0'
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
}

export default TodoList;