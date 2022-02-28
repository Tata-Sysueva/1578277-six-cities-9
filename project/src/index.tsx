import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {offers} from './mocks/offers';
import {reviews} from './mocks/reviews';

const Setting = {
  OFFER_COUNT: 313,
};

ReactDOM.render(
  <React.StrictMode>
    <App
      offersCount={Setting.OFFER_COUNT}
      offers={offers}
      reviews={reviews}
    />
  </React.StrictMode>,
  document.getElementById('root'));
