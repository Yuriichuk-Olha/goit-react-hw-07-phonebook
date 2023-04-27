import axios from 'axios';
axios.defaults.baseURL = 'https://64454d74b80f57f581b6d2dd.mockapi.io';

  export const getContacts = async () => {
    const response = await axios.get('/contacts');
    // console.log(response.data)
    return response.data;
  };
export const createContact = async contact => {
  const response = await axios.post('/contacts', contact);
  return response.data;
};
export const deleteContact = async id => {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
};




































// fetch =======================================================
// const BASE_URL = 'https://64454d74b80f57f581b6d2dd.mockapi.io'

// export const getContacts = async ()=>{
//     const data = await fetch(`${BASE_URL}/contacts`);
//     console.log(await data.json())
//     return  await data.json();
// }

// export const createContact = async (data) => {
//     const response = await fetch(`${BASE_URL}/contacts`,{
//         body: JSON.stringify(data)
//     })
//     return await response.json()
// }

// export const deleteContact = async (id) =>{
//     const response = await fetch(`${BASE_URL}/contacts/${id}`)
//     return await response.json()
// }


// createAsynncThunk===========================================================
// import { createAsyncThunk } from '@reduxjs/toolkit';


// export const getContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
//   try {
//         const response = await axios.get('/contacts');
//     console.log(response.data)
//         return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//   }
//   })

// export const createContact = createAsyncThunk('contacts/createContact', async (contact, thunkAPI) => {
//   try {
//         const response = await axios.post('/contacts',contact);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//   }
// })

// export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
//   try {
//         const response = await axios.delete(`/contacts/${id}`);
//     return response.data;
//   } catch (error) {
//     return thunkAPI.rejectWithValue(error.message)
//   }
// })



