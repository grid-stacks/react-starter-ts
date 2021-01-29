import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";
import { ThunkAction } from "redux-thunk";

import rootReducer, { RootState } from "./rootReducers";

const logger = createLogger({
	collapsed: true,
	duration: true,
});

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: process.env.NODE_ENV === "development",
});

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export default store;
