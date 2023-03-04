import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux'
import './App.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)

    return (
          <div className='main'>
            <h1 className='title'>Phonebook</h1>
            <ContactForm />
            <h2 className='title'>Contacts</h2>
            <Filter />
            <ContactList contacts={contacts} />
          </div>
        );
}
