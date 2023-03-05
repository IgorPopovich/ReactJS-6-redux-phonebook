import React from 'react';
import ContactList from './ContactList/ContactList';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import { useSelector } from 'react-redux'
import './App.css';

export const App = () => {
  const contacts = useSelector(state => state.contacts.contacts)
  const filter = useSelector(state => state.contacts.filter)

  const normalSize = filter.toLocaleLowerCase()
  const visibleContacts = contacts.filter(contact => 
    contact.name.toLocaleLowerCase().includes(normalSize)
  )

    return (
          <div className='main'>
            <h1 className='title'>Phonebook</h1>
            <ContactForm />
            <h2 className='title'>Contacts</h2>
            <Filter />
            <ContactList contacts={visibleContacts} />
          </div>
        );
}
