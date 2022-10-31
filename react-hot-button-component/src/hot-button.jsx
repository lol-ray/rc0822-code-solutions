import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      colorClass: 'clicks-0'
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({
      count: this.state.count + 1
    });
    const current = this.state.count + 1;
    if (current >= 3 && current < 6) {
      this.setState({
        colorClass: 'clicks-3'
      });
    } else if (current >= 6 && current < 9) {
      this.setState({
        colorClass: 'clicks-6'
      });
    } else if (current >= 9 && current < 12) {
      this.setState({
        colorClass: 'clicks-9'
      });
    } else if (current >= 12 && current < 15) {
      this.setState({
        colorClass: 'clicks-12'
      });
    } else if (current >= 15 && current < 18) {
      this.setState({
        colorClass: 'clicks-15'
      });
    } else if (current >= 18) {
      this.setState({
        colorClass: 'clicks-18'
      });
    }
  }

  render() {
    const colorClass = this.state.colorClass;
    return (
      <div>
        <p>Click Count: {this.state.count}</p>
        <button onClick={this.handleClick} className={colorClass}>Button</button>
      </div>
    );
  }
}
