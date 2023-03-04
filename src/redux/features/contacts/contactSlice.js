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
        if (action.payload !== '') {
          state.contacts = state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
        }
    },
  },
})


export const { addContact, deleteContact, filterContact } = contactSlice.actions

export default contactSlice.reducer


// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {
//   contacts: [],
//   filter: ''
// }

// export const contactSlice = createSlice({
//   name: 'contacts',
//   initialState,
//   reducers: {
//     addContact(state, action) {
//         state.contacts.push(action.payload)
//     },
//     deleteContact(state, action) {
//         state.contacts.filter(contact => contact.id !== action.payload.id)
//         //state.contacts = state.contacts.filter(contact => contact.id !== action.payload.id)
//     },
//     filterContact(state, action) {
//         if (action.payload !== '') {
//           //console.log(state.contacts)
//           state.contacts = state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
//             //state.contacts = state.contacts.filter(contact => contact.name.toLocaleLowerCase().includes(action.payload.toLocaleLowerCase()))
//         }
//     },
//   },
// })


// export const { addContact, deleteContact, filterContact } = contactSlice.actions

// export default contactSlice.reducer