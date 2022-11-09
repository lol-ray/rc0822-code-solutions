import React from 'react';
import ReactDOM from 'react-dom/client';
import AppDrawer from './app-drawer';

const menu = [
  { id: 1, section: 'About' },
  { id: 2, section: 'Get Started' },
  { id: 3, section: 'Sign In' }
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<AppDrawer menu={menu} />);
