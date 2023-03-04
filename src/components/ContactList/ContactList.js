import React from 'react';
import './ContactList.css';
import {useDispatch} from 'react-redux';
import {deleteContact} from '../../redux/features/contacts/contactSlice';

const ContactList = ({ contacts }) => {
    const dispatch = useDispatch()

    return <div>
        <ul className='todos'>
            {contacts.map(( {id, name, number}, index ) => (
                <li className='item' key={index}>
                    <p className='text'>{name}</p>
                    <p className='text'>{number}</p>
                    <button onClick={() => dispatch(deleteContact({id}))} className='delete'>Delete</button>
                </li>
            ))}
        </ul>
    </div>
}

export default ContactList;

