import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {reviews} from './mocks/reviews';
import {Provider} from 'react-redux';
import {store} from './store';
import {checkAuthAction, fetchOffersAction} from './store/api-actions';
import {toastConfig} from './utils/utils';
import 'react-toastify/dist/ReactToastify.css';

toastConfig();

store.dispatch(fetchOffersAction());
store.dispatch(checkAuthAction());

ReactDOM.render(
  <Provider store = {store}>
    <React.StrictMode>
      <App
        reviews={reviews}
      />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'));
