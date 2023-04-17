import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts:',
  initialState: {
    contacts: [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
        state.contacts.push(action.payload)
    },
    deleteContact(state, action) {
        state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
    },
    filterContact(state, action) {
      state.filter = action.payload
    },
  },
});

const persistConfig = {
  key: 'contacts-list',
  storage,
  whitelist: ['contacts'],
};

export const contactsReducer = persistReducer(persistConfig, contactSlice.reducer);
export const { addContact, deleteContact, filterContact } = contactSlice.actions

