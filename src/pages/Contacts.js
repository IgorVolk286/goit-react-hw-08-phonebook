import { FormFormik } from '../components/form/FormFormik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FilterCon } from '../components/FilterContacts/FilterContacts';
import { ContactList } from '../components/ContactsList/ContactList';
import { selectContacts, selectIsLoading } from '../Redux/Contactsslice';
import { useDispatch, useSelector } from 'react-redux';
import { fetcher } from 'Redux/Operations';
import { useEffect } from 'react';
export const Contacts = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    dispatch(fetcher());
  }, [dispatch]);

  // const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <>
      <h1>PHONEBOOK </h1>
      {}
      <FilterCon />
      <h2> CONTACTS </h2>
      <FormFormik />

      {contacts.length > 0 ? <ContactList /> : <p>Something wrong....</p>}
      <ToastContainer position="top-center" autoClose={1000} theme="dark" />
    </>
  );
};
