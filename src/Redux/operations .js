import axios from 'axios';

import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://651d8b1c44e393af2d59fa66.mockapi.io';

export const fetcher = createAsyncThunk(
  'contacts/contactsAll',
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/contacts');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

// добавленкие контакта///

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, number }) => {
    try {
      const response = await axios.post('/contacts', { name, number });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

// удаление контакта

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',

  async id => {
    try {
      const response = await axios.delete(`/contacts/${id}`);
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);
export const updateContact = createAsyncThunk(
  'contacts/patchContact',
  async (id, { name, number }) => {
    try {
      const response = await axios.patch(`/contacts/contact/${id}`, {
        name,
        number,
      });
      // }, headers: {
      //   'content-type': 'text/json'
      // });
      return response.data;
    } catch (error) {
      return error.message;
    }
  }
);

/// без асинк\\\\

// export const fetcher = () => async dispatch => {
//   try {
//     dispatch(fetchingInProgress());

//     const responce = await axios.get('/contact');
//     dispatch(fetchingSuccess(responce.data));
//     console.log(responce.data);
//   } catch (error) {
//     dispatch(fetchingError(error.message));
//   }
// };
