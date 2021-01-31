import { configureStore, getDefaultMiddleware, Action } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { createLogger } from "redux-logger";
import { ThunkAction } from "redux-thunk";

import rootReducer from "./rootReducers";
import { jsonPlaceholder } from "./slices/post/post.slice";

const logger = createLogger({
	collapsed: true,
	duration: true,
});

const middleware = [
	...getDefaultMiddleware(),
	logger,
	jsonPlaceholder.middleware,
];

const store = configureStore({
	reducer: rootReducer,
	middleware,
	devTools: process.env.NODE_ENV === "development",
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
