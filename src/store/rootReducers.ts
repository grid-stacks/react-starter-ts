import { combineReducers, Reducer } from "@reduxjs/toolkit";

import { connectRouter } from "connected-react-router";

import {
	countReducer,
	COUNT_SLICE_KEY,
} from "../App/Components/Examples/count/count.slice";
import {
	userReducer,
	USER_SLICE_KEY,
} from "../App/Components/Examples/user/user.slice";
import { jsonPlaceholder } from "../App/Components/Examples/post/post.slice";

import history from "../helpers/history";

// Prepare rootReducer for injecting into enhancer
export default function createReducer(injectedReducers = {}): Reducer {
	const rootReducer = combineReducers({
		router: connectRouter(history),
		[COUNT_SLICE_KEY]: countReducer,
		[USER_SLICE_KEY]: userReducer,
		[jsonPlaceholder.reducerPath]: jsonPlaceholder.reducer,
		...injectedReducers,
	});

	return rootReducer;
}
