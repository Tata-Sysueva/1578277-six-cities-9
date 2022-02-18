import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const Setting = {
  OFFER_COUNT: 313,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount = {Setting.OFFER_COUNT}
    />
  </React.StrictMode>,
  document.getElementById('root'));
