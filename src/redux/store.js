// import {configureStore} from '@reduxjs/toolkit';
// import {persistStore, persistReducer} from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// import {
//     FLUSH,
//     REHYDRATE,
//     PAUSE,
//     PERSIST,
//     PURGE,
//     REGISTER,
// } from 'redux-persist'

// import { reducer } from './reducer'


// const persistConfig = {
//     key: 'CONTACTS',
//     storage,
//     blacklist:['filters']
// }

// const persistedReducer = persistReducer(persistConfig, reducer)

// export const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware)=>
//         getDefaultMiddleware({
//         serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }
//     })
// })

// export const persistor = persistStore(store)