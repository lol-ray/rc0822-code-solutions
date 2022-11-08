import React from 'react';

export default class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      error: 'A password is required.',
      icon: 'fa-solid fa-circle-xmark'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e) {
    if (e.target.value.length < 8) {
      this.setState({
        color: 'red',
        error: 'Your password is too short.',
        icon: 'fa-solid fa-circle-xmark'
      });
    }
    if (e.target.value.length >= 8) {
      this.setState({
        color: 'green',
        error: '',
        icon: 'fa-solid fa-circle-check'
      });
    }
  }

  render() {
    return (
      <div className="container">
        <h1>Password</h1>
        <div className="pass-line">
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleInputChange} />
          <i className={[this.state.icon, this.state.color].join(' ')}></i>
        </div>
        <p className={this.state.color}>{this.state.error}</p>
      </div>
    );
  }
}
