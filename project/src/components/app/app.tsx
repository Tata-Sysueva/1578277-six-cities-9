import Main from '../../screens/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../../screens/favorites/favorites';
import SingIn from '../../screens/sign-in/sing-in';
import Room from '../../screens/room/room';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {Offer} from '../../types/offer';
import {ReviewType} from '../../types/review-type';
import {useState} from 'react';

type AppProps = {
  offers: Offer[];
  reviews: ReviewType[];
}

function App({offers, reviews}: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              offers={offers}
            />
          }
        />
        <Route
          path={AppRoute.SignIn}
          element={<SingIn />}
        />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute
              authorizationStatus={AuthorizationStatus.Auth}
            >
              <Favorites offers={offers} />
            </PrivateRoute>
          }
        />
        <Route path={AppRoute.Room}>
          <Route
            path=':id'
            element={
              <Room
                offers={offers}
                reviews={reviews}
              />
            }
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
