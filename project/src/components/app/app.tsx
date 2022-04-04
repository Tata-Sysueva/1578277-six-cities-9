import Main from '../../screens/main/main';
import {Route, BrowserRouter, Routes} from 'react-router-dom';
import {AppRoute, TIMEOUT_SHOW_ERROR} from '../../const';
import Favorites from '../../screens/favorites/favorites';
import SingIn from '../../screens/sign-in/sing-in';
import Room from '../../screens/room/room';
import NotFoundScreen from '../../screens/not-found-screen/not-found-screen';
import PrivateRoute from '../private-route/private-route';
import {useAppSelector} from '../../hooks';
import Loading from '../loading/loading';
import {isCheckedAuth} from '../../utils/utils';
import {getLoadedDataStatus} from '../../store/data/selectors';
import {getAuthorizationStatus} from '../../store/user-process/selectors';
import {useState} from 'react';
import ErrorMessage from '../../screens/error-message/error-massage';

function App(): JSX.Element {
  const authorizationStatus = useAppSelector(getAuthorizationStatus);
  const isLoadedStatus = useAppSelector(getLoadedDataStatus);

  const [hasTimeElapsed, setHasTimeElapsed] = useState(false);

  setTimeout(() => {
    setHasTimeElapsed(true);
  }, TIMEOUT_SHOW_ERROR);

  if (isCheckedAuth(authorizationStatus) || !isLoadedStatus) {
    if (hasTimeElapsed) {
      return <ErrorMessage />;
    }
    return <Loading />;
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={
            <Main />
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
              <Favorites />
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
