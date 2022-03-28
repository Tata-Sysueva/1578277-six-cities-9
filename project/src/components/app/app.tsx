import Main from '../../screens/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import Favorites from '../../screens/favorites/favorites';
import SingIn from '../../screens/sign-in/sing-in';
import Room from '../../screens/room/room';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {ReviewType} from '../../types/review-type';
import {useAppSelector} from '../../hooks';
import Loading from '../loading/loading';

type AppProps = {
  reviews: ReviewType[];
}

function App({reviews}: AppProps): JSX.Element {
  const {isDataLoaded} = useAppSelector((state) => state);
  const offers = useAppSelector((state) => state.offers);

  if (!isDataLoaded) {
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
            <Main offers={offers}/>
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
