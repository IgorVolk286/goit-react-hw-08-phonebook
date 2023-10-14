import { selectIsLoading, selectError } from '../Redux/Contactsslice';

import { LayOut } from './Layout';

import { GlobalStyle } from './GlobalStyled';

import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Route, Routes } from 'react-router-dom';
import { Home } from '../pages/HomePage/Home';
import { Register } from '../pages/RegisterPage/Register';
import { LogIn } from '../pages/LoginPage/LogIn ';
import { Contacts } from 'pages/ContactsPage/Contacts';
import { refreshUser } from 'Redux/auth/operation';
import { selectIsRefreshing } from 'Redux/auth/selectors';
import { RestrictedRoute } from '../components/RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { Footer } from './Footer/Footer ';

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
      <Footer />
      <GlobalStyle />
    </>
  );
};
