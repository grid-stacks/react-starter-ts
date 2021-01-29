import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { userActions } from "../user/user.slice";

export const COUNT_SLICE_KEY = "count";

// Interface for todos
export interface ICountTodos {
	uuid: string;
	text: string;
	completed: boolean;
}

// Interface for count
export interface ICountState {
	loadingStatus: "not loaded" | "loading" | "loaded" | "error";
	error: string | null;
	count: number;
	todos: ICountTodos[];
}

// Count state
export const initialCountState: ICountState = {
	loadingStatus: "not loaded",
	error: null,
	count: 0,
	todos: [],
};

export const countSlice = createSlice({
	name: COUNT_SLICE_KEY,
	initialState: initialCountState,
	reducers: {
		// Incrementing count
		increment: (state) => {
			state.count += 1;
			state.loadingStatus = "loaded";
		},
		// Decrementing count
		decrement: (state) => {
			state.count -= 1;
		},
		// Incrementing count by payload; Payload typed to be a number must;
		incrementByAmount: (state, { payload }: PayloadAction<number>) => {
			state.count += payload;
			state.loadingStatus = "error";
		},
		// Payload object is extended
		// prepare function receives incoming payload and converts into final payload
		// reducer function works with the final payload
		addTodos: {
			prepare: (text: string) => ({
				payload: { uuid: nanoid(), text, completed: false },
			}),
			reducer(state, { payload }: PayloadAction<ICountTodos>) {
				state.todos.push(payload);
			},
		},
	},
	// In extraReducers action from another slice can be captured
	// And additional actions can be done
	// extraReducers can be write in two ways
	// Builder method and plain method
	extraReducers: (builder) => {
		// Here up on updating user in user slice,
		// count state can be changed
		builder.addCase(userActions.updateUser.type, (state) => {
			return { ...state, ...{ count: 2 } };
		});
	},
	// extraReducers: {
	// 	[userActions.updateUser.type]: (state) => {
	// 		console.log(state.count);
	// 		return { ...state, ...{ count: 2 } };
	// 	},
	// },
});

// Exporting reducer
export const countReducer = countSlice.reducer;

// Exporting all actions
export const countActions = countSlice.actions;

// Selecting full state
export const getCountState = (state: {
	[COUNT_SLICE_KEY]: ICountState;
}): ICountState => {
	return state[COUNT_SLICE_KEY];
};

// Selecting count
export const selectCount = (state: {
	[COUNT_SLICE_KEY]: ICountState;
}): number => state[COUNT_SLICE_KEY].count;
