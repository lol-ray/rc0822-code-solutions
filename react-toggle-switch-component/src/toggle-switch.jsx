import React from 'react';

export default class ToggleSwitch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: true,
      text: 'on'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const status = this.state.status;
    const body = document.querySelector('body');
    if (status === true) {
      this.setState({
        status: false,
        text: 'off'
      });
      body.className = 'off';
    }
    if (status === false) {
      this.setState({
        status: true,
        text: 'on'
      });
      body.className = 'on';
    }
  }

  render() {
    return (
      <div className={this.state.text}>
        <div className="switch-text">
          <label className="switch">
            <input
              type="checkbox"
              onChange={this.handleInputChange}
              defaultChecked={true} />
            <span className="slider"></span>
          </label>
          <h2 className={this.state.text}>{this.state.text}</h2>
        </div>
      </div>
    );
  }
}
