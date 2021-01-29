import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const USER_SLICE_KEY = "user";

// Enum for loading statuses
export enum LoadingEnum {
	NOT_LOADED = "not loaded",
	LOADING = "loading",
	LOADED = "loaded",
	ERROR = "error",
}

// Interface for loading and errors
export interface ILoadingState {
	loadingStatus:
		| LoadingEnum.NOT_LOADED
		| LoadingEnum.LOADING
		| LoadingEnum.LOADED
		| LoadingEnum.ERROR;
	error: string | null;
}

// Interface for user
export interface IUserState {
	username: string;
	email: string;
	age: number;
}

// Type for status and user combinedly
export type UserState = ILoadingState & IUserState;

// User state
export const userState: IUserState = {
	username: "",
	email: "",
	age: 0,
};

// Loading state
export const loadingState: ILoadingState = {
	loadingStatus: LoadingEnum.NOT_LOADED,
	error: null,
};

// Combined state
export const initialUserState: UserState = {
	...userState,
	...loadingState,
};

export const userSlice = createSlice({
	name: USER_SLICE_KEY,
	initialState: initialUserState,
	reducers: {
		// Updates username only
		updateUsername: (state, { payload }: PayloadAction<string>) => {
			state.username = payload;
		},
		// Updates email only
		updateEmail: (state, { payload }: PayloadAction<string>) => {
			state.email = payload;
		},
		// Updates age only
		updateAge: (state, { payload }: PayloadAction<number>) => {
			state.age = payload;
		},
		// Updates full state
		updateUser: (state, { payload }: PayloadAction<IUserState>) => {
			return { ...state, ...payload };
		},
	},
});

// Exporting reducer
export const userReducer = userSlice.reducer;

// Exporting all actions
export const userActions = userSlice.actions;

// Selecting full state
export const getUserState = (state: {
	[USER_SLICE_KEY]: UserState;
}): UserState => {
	return state[USER_SLICE_KEY];
};

// Selecting only email
export const selectUserEmail = (state: {
	[USER_SLICE_KEY]: UserState;
}): string => state[USER_SLICE_KEY].email;

// Selecting only loading
export const selectUserLoading = (state: {
	[USER_SLICE_KEY]: UserState;
}): string => state[USER_SLICE_KEY].loadingStatus;

// Selecting only error
export const selectUserError = (state: {
	[USER_SLICE_KEY]: UserState;
}): string | null => state[USER_SLICE_KEY].error;

// Selecting loading and error both
export const selectUserLoadingError = (state: {
	[USER_SLICE_KEY]: UserState;
}): ILoadingState => {
	return {
		loadingStatus: state[USER_SLICE_KEY].loadingStatus,
		error: state[USER_SLICE_KEY].error,
	};
};
