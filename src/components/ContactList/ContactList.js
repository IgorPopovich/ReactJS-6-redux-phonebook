import React from 'react';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/features/contacts/contactSlice';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch()

    return <div>
        <ul className={css.contacts}>
            {contacts.map(( {id, name, number}, index ) => (
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
    contacts: PropTypes.array,
  }; 

export default ContactList;

