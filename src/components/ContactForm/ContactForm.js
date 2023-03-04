import React, { useState } from 'react';
import { nanoid } from 'nanoid'
import './ContactForm.css';
import {useDispatch} from 'react-redux';
import {addContact} from '../../redux/features/contacts/contactSlice';

const ContactForm = () => {
  const [name, setNume] = useState('')
  const [number, setNumber] = useState('')
  const dispatch = useDispatch()

  const handleChangeNume = (event) => {
    setNume(event.target.value)
  }

  const handleChangeNumber = (event) => {
    setNumber(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (name === '' || number === '') {
      return
    }
    const newContact = {
      name: name,
      number: number,
      id: nanoid()
    } 

    dispatch(addContact(newContact))
    setNume('')
    setNumber('')
  }

    return (
    <div className='contactForm'>
      <form onSubmit={handleSubmit} className='form' action="">
        <label>
          Name
          <input
            onChange={handleChangeNume }
            value={name}
            className='value'
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label>
          Number
          <input
            onChange={handleChangeNumber }
            value={number}
            className='value'
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
        </label>
        <button type='submit' className='btnAdd'>Add contact</button>
      </form>
    </div>
  );
  
};

export default ContactForm;

