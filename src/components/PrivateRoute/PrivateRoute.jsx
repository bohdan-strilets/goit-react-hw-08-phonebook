import { Route, Navigate, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from 'redux/auth/auth-selecors';

function PrivateRoute({ children, redirectTo = '/', ...routeProps }) {
  const isLoggedIn = useSelector(state => getIsLoggedIn(state));

  return (
    <Routes>
      <Route {...routeProps}>
        {isLoggedIn ? children : <Navigate to={redirectTo} />}
      </Route>
    </Routes>
  );
}

export default PrivateRoute;
