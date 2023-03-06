import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux'
import css from './App.module.css';
import PropTypes from 'prop-types';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)

  const normalSize = filter.toLocaleLowerCase()
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLocaleLowerCase().includes(normalSize)
  )

    return (
          <div className={css.main}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList contacts={visibleContacts} />
          </div>
        );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
}; 