import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import SharedLayout from 'components/SharedLayout/SharedLayout';
import { PublicRoute } from '../routes/PublicRoute';
import { PrivateRoute } from '../routes/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { refreshUser } from '../../redux/auth/operations';
import Loader from '../Loader/Loader';
import { loadAuthDataFromLocalStorage } from '../../redux/auth/slice';

const Home = lazy(() => import('../../pages/Home/Home'));
const Nannies = lazy(() => import('../../pages/Nannies/Nannies'));
const Favorites = lazy(() => import('../../pages/Favorites/Favorites'));

const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    const authData = loadAuthDataFromLocalStorage();
    if (authData && authData.token) {
      dispatch(refreshUser(authData.token));
    }
  }, [dispatch]);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route
          index
          element={
            <PublicRoute>
              <Home />
            </PublicRoute>
          }
        />
        <Route
          path="/nannies"
          element={
            <PublicRoute>
              <Nannies />
            </PublicRoute>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
export default App;
