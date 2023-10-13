import { selectIsLoading, selectError } from '../Redux/Contactsslice';

import { LayOut } from './Layout';

import { GlobalStyle } from './GlobalStyled';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Home } from '../../src/pages/Home';
import { Register } from '../../src/pages/Register';
import { LogIn } from '../../src/pages/LogIn ';
import { Contacts } from 'pages/Contacts';
import { refreshUser } from 'Redux/auth/operation';
import { selectIsRefreshing } from 'Redux/auth/selectors';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

export const App = () => {
  const dispatch = useDispatch();

  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <>
      <div>
        {isLoading && <p>Loading contacts....</p>}
        {error && <span>{error}</span>}
      </div>

      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route index element={<Home />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<Register />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute redirectTo="/contacts" component={<LogIn />} />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<Contacts />} />
            }
          />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
};
