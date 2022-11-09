import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'closed',
      menu: 'menu',
      background: 'menu-background hidden'
    };
    this.openMenu = this.openMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  openMenu() {
    this.setState({
      menu: 'menu view',
      background: 'menu-background'
    });
  }

  closeMenu() {
    this.setState({
      menu: 'menu',
      background: 'menu-background hidden'
    });
  }

  render() {
    return (
      <div className="container">
        <i className="fa-solid fa-bars" onClick={this.openMenu}></i>
        <div className={this.state.menu}>
          <h1>Menu</h1>
          <ul className="links">
            <li onClick={this.closeMenu}>About</li>
            <li onClick={this.closeMenu}>Get Started</li>
            <li onClick={this.closeMenu}>Sign In</li>
          </ul>
        </div>
        <div className={this.state.background} onClick={this.closeMenu}></div>
      </div>
    );
  }
}
