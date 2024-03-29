import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/user";
import roles from "./slices/roles";

export const store = configureStore({
  reducer: {
    user: userReducer,
    roles: roles
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware(),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
