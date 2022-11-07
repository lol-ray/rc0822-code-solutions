import React from 'react';

export default class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
      icon: 'fa-solid fa-play',
      stopwatch: null
    };
    this.handleClick = this.handleClick.bind(this);
    this.resetClick = this.resetClick.bind(this);
    this.tick = this.tick.bind(this);
  }

  handleClick() {
    const icon = this.state.icon;
    if (icon === 'fa-solid fa-play') {
      this.setState({
        icon: 'fa-solid fa-pause',
        stopwatch: setInterval(this.tick, 1000)
      });
    }
    if (icon === 'fa-solid fa-pause') {
      this.setState({
        icon: 'fa-solid fa-play'
      });
      clearInterval(this.state.stopwatch);
    }
  }

  resetClick() {
    const icon = this.state.icon;
    if (icon === 'fa-solid fa-play') {
      this.setState({
        counter: 0
      });
    }
  }

  tick() {
    this.setState({
      counter: this.state.counter + 1
    });
  }

  render() {
    return (
      <div className="container">
        <div className="circle" onClick={this.resetClick}>
          <p className="counter">{this.state.counter}</p>
        </div>
        <div className="button">
          <i className={this.state.icon} onClick={this.handleClick}></i>
        </div>
      </div>
    );
  }
}
