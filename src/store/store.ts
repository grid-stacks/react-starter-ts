import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { createLogger } from "redux-logger";

import rootReducer from "./rootReducers";

const logger = createLogger({
	collapsed: true,
	duration: true,
});

const middleware = [...getDefaultMiddleware(), logger];

export default configureStore({
	reducer: rootReducer,
	middleware,
	devTools: process.env.NODE_ENV !== "development" ? false : true,
});
