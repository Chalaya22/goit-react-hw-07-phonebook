import { useSelector } from 'react-redux';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts);

  return (
    <section className="styledSection">
      <h1 className="titlePhone">Phonebook ❤️</h1>
      <ContactForm />

      <h2 className="titleContact">Contacts</h2>
      {contacts.length > 1 && <Filter />}

      {contacts.length !== 0 && <ContactList />}
    </section>
  );
};
