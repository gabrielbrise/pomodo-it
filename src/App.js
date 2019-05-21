import React, { Component } from 'react'
import './App.css';
import Clock from './components/Clock/Clock'
import TodoInput from './components/Todo/TodoInput';
import TodoList from './components/Todo/TodoList';
import Logo from './components/Logo/Logo';


class App extends Component {
  state = {
    todos: [
      {id: 1, value:'Sketh first UI mockup', isCompleted: true},
      {id: 2, value:'Study React fundamentals', isCompleted: true},
      {id: 3, value:'Program first React app', isCompleted: false},
      {id: 4, value:'Prepare portfolio entry', isCompleted: false},
      {id: 5, value:'Send e-mail', isCompleted: false},
    ],
    clock: {
      minutes: 8, seconds: 7, isRunning: false
    }
  }
  


  toggleComplete = (id) => {
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.isCompleted = !todo.isCompleted
      }
      return todo;
    })})
  }

  delTodo = (id) => {
    this.setState({ todos: this.state.todos.filter(todo => todo.id !== id)})
  }

  addTodo = (value) => {
    const newTodo = {
      id: this.state.todos.length + 1,
      value,
      isCompleted: false

    }
    this.setState({ todos: [...this.state.todos, newTodo]})
  }

  handlePlay = (e) => {
    console.log('play')
    this.handleClockOnOff()
  }

  handlePause = (e) => {
    console.log('pause')
    this.handleClockOnOff()
  }

  handleReset = (e) => {
    console.log('reset')
  }

  handleClockOnOff = () => {
    if(this.state.clock.isRunning === false) {
      this.setState({clock: {
        minutes: this.state.clock.minutes,
        seconds: this.state.clock.minutes,
        isRunning: true
      }})
      console.log('Go bitch')
    }
    else {
      this.setState({clock: {
        minutes: this.state.clock.minutes,
        seconds: this.state.clock.minutes,
        isRunning: false
      }})
      
    }
  }



  

  render () {

    return (
      <div className="container">
        <Logo />
        <Clock clock={this.state.clock} 
          onPlay={this.handlePlay} 
          onPause={this.handlePause} 
          onReset={this.handleReset}
          onChangeMinutes={this.handleChangeMinutes}/>
        <TodoList todos={this.state.todos} toggleComplete={this.toggleComplete} delTodo={this.delTodo}/>
        <TodoInput addTodo={this.addTodo}/>
      </div>
    );
  }
}



export default App;
