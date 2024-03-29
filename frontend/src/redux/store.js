import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { apiSlice } from './features/api/apiSlice'
import authReducer from './features/auth/authSlice'


const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware),
    devTools: true
})

export const persistor = persistStore(store)