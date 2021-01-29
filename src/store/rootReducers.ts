import { combineReducers } from "@reduxjs/toolkit";
import { countReducer, COUNT_SLICE_KEY } from "./slices/count.slice";
import { userReducer, USER_SLICE_KEY } from "./slices/user.slice";

const rootReducer = combineReducers({
	[COUNT_SLICE_KEY]: countReducer,
	[USER_SLICE_KEY]: userReducer,
});

// Type for whole reducer object
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
