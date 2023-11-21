import css from './ContactList.module.css';
import ContactElements from '../ContactElements/ContactElements';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactOperation';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);

  const onFilterContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.trim().toLowerCase())
    );
  };

  const filteredContacts = onFilterContacts();

  function onDelete(id) {
    dispatch(removeContact(id));
  }

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(({ id, name, phone }) => (
        <ContactElements
          key={id}
          name={name}
          id={id}
          number={phone}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};
export default ContactList;
