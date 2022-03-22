import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App
        offers={offers}
        reviews={reviews}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
