import { createAsyncThunk } from "@reduxjs/toolkit";
import { createContact,  deleteContact,  getContacts } from "./contactsApi";

export const getContactsThunk = createAsyncThunk('contacts/get', () => getContacts()
)

export const createContactsThunk = createAsyncThunk('contacts/create', (data) => createContact(data)
)

export const deleteContactsThunk = createAsyncThunk('contacts/delete', (id) => deleteContact(id)
)























// export const getContactsThunk = createAsyncThunk('contacts/fetchAll', () => getContacts()
// )
// export const createContactsThunk = createAsyncThunk('contacts/createContact', (data) => createContact(data)
// )

// export const deleteContactsThunk = createAsyncThunk('contacts/deleteContact', (id) => deleteContact(id)
// )