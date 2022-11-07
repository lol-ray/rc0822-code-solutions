import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange() {
    this.setState({
      username: event.target.value
    });
  }

  handlePasswordChange() {
    this.setState({
      password: event.target.value
    });
  }

  handleSubmit() {
    event.preventDefault();
    console.log(`state: ${JSON.stringify(this.state)}`);
  }

  render() {
    return (
      <form>
        <label htmlFor="username">Username:
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange} />
        </label>
        <label htmlFor="password">Password:
          <input
            type="text"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange} />
        </label>
        <input
          type="submit"
          value="Sign Up"
          onClick={this.handleSubmit} />
      </form>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RegistrationForm />);
