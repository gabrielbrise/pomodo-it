import React, { Component } from 'react'
import { ReactComponent as Delete} from './delete.svg';
import './Todo.css';
import PropTypes from 'prop-types';

class Todo extends Component {
  state = {
    hoverDelete: false
  }
  
  toggleHover = (e) => {
    this.setState({ hoverDelete: !this.state.hoverDelete });
    console.log(this.state.hoverDelete)
  }

  // handleDeleteStyle = () => !this.state.hoverDelete === true ? hoverdeleteStyle : {deleteStyle}

  getStyle = () => {
    return {
      textDecoration: this.props.isCompleted ? 'line-through' : 'none'
    }
  }

  getCheckStatus = () => {
    return this.props.isCompleted ? true : false
  }

  render() {
    const { id, value } = this.props.todo;


    return (
      <div className="todo" style={this.getStyle()}>
        <input type="checkbox" className="check" onChange={this.props.toggleComplete.bind(this, id)} defaultChecked={this.getCheckStatus()}/>
        <p className="todo-text">{value}</p>
        <Delete className="delete" onMouseUpCapture={this.props.delTodo.bind(this, id)} onMouseEnter={this.toggleHover} onMouseLeave={this.toggleHover} />
      </div>
    )
  }
}

Todo.propTypes = {
  todo: PropTypes.object.isRequired,
}

export default Todo;