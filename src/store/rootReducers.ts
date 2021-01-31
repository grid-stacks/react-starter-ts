import { combineReducers } from "@reduxjs/toolkit";

import { countReducer, COUNT_SLICE_KEY } from "./slices/count/count.slice";
import { userReducer, USER_SLICE_KEY } from "./slices/user/user.slice";
import { jsonPlaceholder } from "./slices/post/post.slice";

const rootReducer = combineReducers({
	[COUNT_SLICE_KEY]: countReducer,
	[USER_SLICE_KEY]: userReducer,
	[jsonPlaceholder.reducerPath]: jsonPlaceholder.reducer,
});

export default rootReducer;
