import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { Theme, presetGpnDefault } from '@consta/uikit/Theme';

import './index.css';

ReactDOM.render(
  <Router>
    <Theme preset={presetGpnDefault}>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Theme>
  </Router>,
  document.getElementById('root')
);