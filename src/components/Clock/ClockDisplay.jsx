import React, { Component } from 'react'
import './Clock.css';




 class ClockDisplay extends Component {


  // Adds Zero in Front of Single Numbers
  handleClockDisplay = (time) => {
    if(time < 10 && time.toString().length < 2) {
      return `0${time}`
    }
    else {
      console.log(time.toString().length)
      return time
    }
    
  }

  state = {
    minutes: this.handleClockDisplay(this.props.clock.minutes),
    seconds: this.handleClockDisplay(this.props.clock.seconds)
  }
  
  onChangeMinutes = (e) => {
    const _minutes = (e.target.validity.valid) ? e.target.value : this.state.minutes;
    this.setState({ minutes: _minutes });
  }

  onChangeSeconds = (e) => {
    const _seconds = (e.target.validity.valid) ? e.target.value : this.state.seconds;
    this.setState({ seconds: _seconds });
  }

  handleFocus = (event) => event.target.select();

  checkFocusMinutes = (e) => {
    if (document.clock.minutes.value.length >= 2) {
      document.clock.seconds.focus()
      // this.setState({minutes: this.handleClockDisplay(e.target.value)})
    }
    console.log(document.clock.minutes.value.length)
  }

  onLeaveMinutes = () => {
    this.setState({minutes: this.handleClockDisplay(this.state.minutes)})
  }

  onLeaveSeconds = () => {
    let _seconds = this.state.seconds
    if(_seconds >= 59) {
      _seconds = 59
    }
    this.setState({seconds: this.handleClockDisplay(_seconds)})

  }

  checkFocusSeconds = (e) => {
    let chars = document.clock.seconds.value.length;
    if (chars <= 2)
    {document.clock.seconds.focus()}
  }
  
  
  handleChangeMinutes = (e) => {
    this.setState({clock: {
      minutes: e.target.value,
      seconds: this.state.seconds,
    }

    })
  }

  handleChangeSeconds = (e) => {
    this.setState({clock: {
      minutes: this.state.minutes,
      seconds: e.target.value,
    }})
  }



  handleClockTick = () => {
    if(this.props.clock.isRunning) {
      if(this.state.seconds < 1 && this.state.minutes <= 0) {
        this.props.clock.isRunning = false;
      }
      else if(this.state.seconds <= 0 && this.state.minutes >= 0) {
        this.setState({minutes: this.handleClockDisplay(this.state.minutes - 1) })
        this.setState({seconds: 59})
        console.log(this.state.minutes)
        console.log(this.state.seconds)
      }
      else {
        this.setState({seconds: this.handleClockDisplay(this.state.seconds - 1)})
        console.log(this.state.seconds)
      }
    }
  }


  componentDidMount() {
      this.interval = setInterval(() => this.handleClockTick(), 1000);
    console.log('Mounting...')
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    console.log('Unmounting...')
  }



  render() {
    return (
      <div className="clock">
        {/* <h1 style={digitalClockStyle}>
          {this.handleClockDisplay(this.props.clock.minutes)}
          :
          {this.handleClockDisplay(this.props.clock.seconds)}</h1> */}
          <form name="clock">
          <input 
            className="clock-input"
            name="minutes"
            type="text" 
            pattern="[0-9]*" 
            onChange={this.onChangeMinutes}
            // onInput={this.props.onChangeMinutes} 
            value={this.state.minutes}
            maxLength="2"
            onFocus={this.handleFocus}
            onBlur={this.onLeaveMinutes}
            // onSubmit={this.change}
            onInput={this.checkFocusMinutes}
            />
            :
            <input
            className="clock-input"
            name="seconds"
            type="text" 
            pattern="[0-9]*" 
            onChange={this.onChangeSeconds} 
            onBlur={this.onLeaveSeconds}
            value={this.state.seconds}
            maxLength="2"
            onFocus={this.handleFocus}/>
            </form>
      </div>
    )
  }
}

// const clockInputStyle = {
//   textAlign: 'center',
//   fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
//   // flex: '4',
//   border: '0px',
//   fontSize: '1em',
//   fontWeight: '300',
//   margin: '0',
//   width: '1.2em',
//   color: 'white',
//   spacing: '0px',
//   padding: '0',
//   lineHeight: '1em',
//   backgroundColor: '#F56565',
// }

// const digitalClockStyle = {
//     textAlign: 'center',
//     fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif",
//     flex: '4',
//     fontSize: '4em',
//     fontWeight: '300',
//     margin: '0',
//     padding: '0',
//     lineHeight: '1em'
//   }

export default ClockDisplay;