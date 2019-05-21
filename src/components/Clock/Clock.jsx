import React, { Component } from 'react'
import { ReactComponent as Play} from './play.svg';
import { ReactComponent as Pause} from './pause.svg';
import { ReactComponent as Reset} from './reset.svg';
import ClockDisplay from './ClockDisplay';


 class Clock extends Component {

  state = {
    playPauseHover: false,
    resetHover: false,
  }

  togglePlayPauseHover = (e) => {
    this.setState({ playPauseHover: !this.state.playPauseHover });
  }

  toggleResetHover = (e) => {
    this.setState({ resetHover: !this.state.resetHover });
  }

  handlePlayPauseStyle = (e) => {
    return {
      float: 'left',
      height: this.state.playPauseHover ? '55px' : '40px',
      flex: '1',
      fill: '#FFF',
      cursor: this.state.playPauseHover ? 'pointer' : '',
      transition: 'height 0.3s'
    }
  }

  handleResetStyle = (e) => {
    return {
      float: 'right',
      // height: this.state.resetHover ? '55px' : '40px',
      height: '40px',
      flex: '1',
      // fill: '#FFF',
      fill: '#D56565',
      // cursor: this.state.resetHover ? 'pointer' : '',
      transition: 'height 0.3s'
    }
  }


  handlePlayPause = (isRunning) => {
    if(isRunning === false) {
      return <Play
        play={this.state.play}
        style={this.handlePlayPauseStyle()} 
        onMouseEnter={this.togglePlayPauseHover} 
        onMouseLeave={this.togglePlayPauseHover}
        onMouseUpCapture={this.props.onPlay}
      />
    }
    else {
      return <Pause
        pause={this.state.pause}
        style={this.handlePlayPauseStyle()}
        onMouseEnter={this.togglePlayPauseHover} 
        onMouseLeave={this.togglePlayPauseHover}
        onMouseUpCapture={this.props.onPause} />
    }
  }



  render() {


    
    return (
      <div style={clockStyle}>
        {this.handlePlayPause(this.props.clock.isRunning)}
        <ClockDisplay 
        clock={this.props.clock}
        onChangeMinutes={this.props.onChangeMinutes}/>
        <Reset
          reset={this.state.reset}
          style={this.handleResetStyle()}
          onMouseEnter={this.toggleResetHover} 
          onMouseLeave={this.toggleResetHover}
          onMouseUpCapture={this.props.onReset}
          />
      </div>
    )
  }
}



// const PauseBtn = <Pause />

// const resetStyle = {
//   fill: '#FFF',
//   height: '40px',
//   float: 'right',
//   flex: '1',
// }

const clockStyle = {
    background: '#F56565',
    color: '#FFF',
    // border: '1px #c9455d solid',
    padding: '3px 8px',
    borderRadius: '15px',
    textAlign: 'middle',
    display: 'flex',
    alignItems: 'center',
    // boxShadow: '3px 3px 5px #ccc'
    // boxShadow: '2px 2px 3px 0px #F56565, 0px 0px 0px 0px #F56565'
}



export default Clock;