import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {deleteContact} from '../../redux/slices/contacts/contactSlice';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = () => {
    const dispatch = useDispatch()
    const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.contacts.filter)
  
    const normalSize = filter.toLocaleLowerCase()
    const visibleContacts = contacts.filter(contact => 
      contact.name.toLocaleLowerCase().includes(normalSize)
    )

    return <div>
        <ul className={css.contacts}>
            {visibleContacts.map(( {id, name, number}, index ) => (
                <li className={css.item} key={index}>
                    <p className={css.text}>{name}</p>
                    <p className={css.text}>{number}</p>
                    <button onClick={() => dispatch(deleteContact({id}))} className={css.delete}>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

ContactList.propTypes = {
    visibleContacts: PropTypes.array,
  }; 

export default ContactList;

