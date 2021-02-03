import { combineReducers } from "@reduxjs/toolkit";

import { connectRouter } from "connected-react-router";

import {
	countReducer,
	COUNT_SLICE_KEY,
} from "./slices/examples/count/count.slice";
import { userReducer, USER_SLICE_KEY } from "./slices/examples/user/user.slice";
import { jsonPlaceholder } from "./slices/examples/post/post.slice";

import history from "./history";

const rootReducer = combineReducers({
	router: connectRouter(history),
	[COUNT_SLICE_KEY]: countReducer,
	[USER_SLICE_KEY]: userReducer,
	[jsonPlaceholder.reducerPath]: jsonPlaceholder.reducer,
});

export default rootReducer;
