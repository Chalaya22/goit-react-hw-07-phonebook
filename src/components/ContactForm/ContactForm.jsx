import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contactOperation';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(' ');
  const [phone, setPhone] = useState(' ');

  const handleInputChange = event => {
    const { name, value } = event.currentTarget;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'phone':
        setPhone(value);
        break;

      default:
        return;
    }
  };
  const reset = () => {
    setName(' ');
    setPhone(' ');
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newObject = {
      id: nanoid(),
      name,
      phone,
    };

    dispatch(addContact(newObject));
    reset();
  };

  return (
    <form onSubmit={handleSubmit} className={css.form}>
      <label>
        <p className={css.labelText}>Name</p>
        <input
          className={css.imputForm}
          type="text"
          name="name"
          value={name}
          onChange={handleInputChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' \\-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          placeholder="username: "
          required
        />
      </label>
      <label>
        <p className={css.labelText}>Number</p>
        <input
          className={css.imputForm}
          type="tel"
          name="phone"
          value={phone}
          onChange={handleInputChange}
          placeholder="Enter number tel: "
          pattern="\\+?\\d{1,4}?[ .\\-\\s]?\\(?\\d{1,3}?\\)?[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,4}[ .\\-\\s]?\\d{1,9}"
          required
        />
      </label>

      <button className={css.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
};
export default ContactForm;
