import Main from '../../screens/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute} from '../../const';
import Favorites from '../../screens/favorites/favorites';
import SingIn from '../../screens/sign-in/sing-in';
import Room from '../../screens/room/room';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import Loading from '../loading/loading';
import {isCheckedAuth} from '../../utils/utils';
import {getLoadedDataStatus, getOffers} from '../../store/load-data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';

function App(): JSX.Element {
  const offers = useAppSelector(getOffers);
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isDataLoaded = useAppSelector(getLoadedDataStatus);


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
            < Main
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
