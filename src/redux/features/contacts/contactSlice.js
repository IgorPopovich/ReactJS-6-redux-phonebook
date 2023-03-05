import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  contacts: [],
  filter: ''
}


export const contactSlice = createSlice({
  name: 'contacts',
  initialState,
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
})


export const { addContact, deleteContact, filterContact } = contactSlice.actions

export default contactSlice.reducer

