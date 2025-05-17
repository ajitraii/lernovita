import { combineReducers, configureStore } from "@reduxjs/toolkit";
import UserReducer from './slices/UserSlice';
import ProductReducer from './slices/ProductSlice'
import AsyncStorage from "@react-native-async-storage/async-storage";
import { persistReducer, persistStore } from "redux-persist";



const rootReducer = combineReducers({
    user: UserReducer,
    product: ProductReducer
})

const persistConfig = {
    key: 'root',
    storage : AsyncStorage,
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)

 const Store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck : true})
})

const persistedStore = persistStore(Store)

export {persistedStore, Store}