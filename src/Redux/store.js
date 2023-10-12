import { configureStore } from '@reduxjs/toolkit';

import { contactReducer } from './Contactsslice';
import { filterSlice } from './Filterslice';
import { authSlice } from './auth/AuthSlice';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};
const persistedReducer = persistReducer(persistConfig, authSlice.reducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterSlice.reducer,
    auth: persistedReducer,
  },
});

export const persistor = persistStore(store);

// console.log(persistor);

// const enhancer = devToolsEnhancer();

// export const store = createStore(rootReducer, enhancer);
// {
//   contacts: {
//     items: [],
//     isLoading: false,
//     error: null
//   },
//   filter: ""
// }
