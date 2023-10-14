import { FormFormik } from '../../components/form/FormFormik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterCon } from '../../components/FilterContacts/FilterContacts';
import { ContactList } from '../../components/ContactsList/ContactList';
import { selectContacts } from '../../Redux/Contactsslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from '../../Redux/operations ';
import { useEffect } from 'react';
import { WrapContactsPage } from './Contacts styled';
export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  // const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetcher());
  }, [dispatch]);

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <WrapContactsPage>
      <FilterCon />
      <FormFormik />

      {contacts.length > 0 ? <ContactList /> : <p>You haven't contacts....</p>}
      <ToastContainer position="top-center" autoClose={1000} theme="dark" />
    </WrapContactsPage>
  );
};
