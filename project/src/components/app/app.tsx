import Main from '../../screens/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../../screens/favorites/favorites';
import SingIn from '../../screens/sign-in/sing-in';
import Room from '../../screens/room/room';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {ReviewType} from '../../types/review-type';
import {useAppSelector} from '../../hooks';
import Loading from '../loading/loading';
import {isCheckedAuth} from '../../utils/utils';

type AppProps = {
  reviews: ReviewType[];
}

function App({reviews}: AppProps): JSX.Element {
  const offers = useAppSelector((state) => state.offers);

  const {authorizationStatus, isDataLoaded} = useAppSelector((state) => state);

  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading />
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main
              offers={offers}
              authorizationStatus={authorizationStatus}
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
              authorizationStatus={authorizationStatus}
            >
              <Favorites offers={offers} authorizationStatus={authorizationStatus} />
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
                authorizationStatus={authorizationStatus}
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
