import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contactOperation';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Loader from './LoaderPhone/LoaderPhone';
import Filter from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);
  const isLoading = useSelector(state => state.contacts.isLoading);
  const error = useSelector(state => state.contacts.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    // if (error === 'ERR_BAD_REQUEST') {
    //   alert('There are some problems! Try again ...');
    //   return;
    // }
    if (error) {
      alert(error);
    }
  }, [error]);

  return (
    <section className="styledSection">
      {isLoading && <Loader />}
      <h1 className="titlePhone">Phonebook ❤️</h1>
      <ContactForm />

      <h2 className="titleContact">Contacts</h2>
      {contacts.length > 1 && <Filter />}

      {contacts.length !== 0 && <ContactList />}
    </section>
  );
};
