import {configureStore} from '@reduxjs/toolkit';
// import { contactsReducer } from 'contacts/slice';
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import { contactsReducer } from './slice';

const persistConfig = {
    key: 'CONTACTS',
    storage,
    blacklist:['filter']
}

const persistedReducer = persistReducer(persistConfig, contactsReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware)=>
        getDefaultMiddleware({
        serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      }
    })
})

export const persistor = persistStore(store)





// export const store = configureStore({
//     reducer: contactsReducer,
// })