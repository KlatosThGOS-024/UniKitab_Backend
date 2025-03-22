import { fileReducer } from "@/functions/docs/file";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
//@ts-ignore
import createIndexedDBStorage from "redux-persist-indexeddb-storage";
import {
  persistStore,
  persistReducer,
  REHYDRATE,
  PERSIST,
  FLUSH,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import { responseReducer } from "@/functions/messages/message";
import { userAccountReducer } from "@/functions/userAccount/User";
import { pdfBookReducer } from "@/functions/pdfBooks/pdfbooks";
import { QuestionReducer } from "@/functions/dsaQuestions/question";

const logger = (store: any) => (next: any) => (action: any) => {
  // console.log("dispatching", action);
  let result = next(action);
  //.log("next state", store.getState());
  return result;
};

const indexedDBStorage = createIndexedDBStorage("myIndexedDB", "myDataStore");

const debugStorage = {
  getItem: async (key: any) => {
    //.log("Getting from storage:", key);
    try {
      const result = await indexedDBStorage.getItem(key);
      return result;
    } catch (error) {
      console.error("Error getting from storage:", key, error);
      throw error;
    }
  },
  setItem: async (key: any, value: any) => {
    // console.log("Setting to storage:", key, value);
    try {
      const result = await indexedDBStorage.setItem(key, value);
      //   console.log("Set to storage successfully:", key);
      return result;
    } catch (error) {
      console.error("Error setting to storage:", key, error);
      throw error;
    }
  },
  removeItem: async (key: any) => {
    //  console.log("Removing from storage:", key);
    try {
      const result = await indexedDBStorage.removeItem(key);
      //   console.log("Removed from storage successfully:", key);
      return result;
    } catch (error) {
      console.error("Error removing from storage:", key, error);
      throw error;
    }
  },
};

const persistConfig = {
  key: "root",
  storage: debugStorage,
  whitelist: ["fileReducer", "QuestionReducer"],
  debug: true,
};

const rootReducer = combineReducers({
  fileReducer,
  responseReducer,
  userAccountReducer,
  pdfBookReducer,
  QuestionReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store, null, () => {
  console.log("Rehydration complete. Current state:", store.getState());
});

export type IRootState = ReturnType<typeof store.getState>;
