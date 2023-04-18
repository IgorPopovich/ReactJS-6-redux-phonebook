import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import css from './App.module.css';
import PropTypes from 'prop-types';

export const App = () => {

    return (
          <div className={css.main}>
            <h1 className={css.title}>Phonebook</h1>
            <ContactForm />
            <h2 className={css.title}>Contacts</h2>
            <Filter />
            <ContactList />
          </div>
        );
}

App.propTypes = {
  contacts: PropTypes.array,
  filter: PropTypes.string,
}; 