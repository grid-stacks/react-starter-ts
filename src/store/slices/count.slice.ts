import {
	createEntityAdapter,
	createSelector,
	createSlice,
	EntityState,
	PayloadAction,
} from "@reduxjs/toolkit";

export const COUNT_SLICE_KEY = "count";

export interface ICountEntity {
	id: number;
}

export interface ICountState extends EntityState<ICountEntity> {
	loadingStatus: "not loaded" | "loading" | "loaded" | "error";
	error: string | null;
	count: number;
}

export const countAdapter = createEntityAdapter<ICountEntity>();

export const initialCountState: ICountState = countAdapter.getInitialState({
	loadingStatus: "not loaded",
	error: null,
	count: 0,
});

export const countSlice = createSlice({
	name: COUNT_SLICE_KEY,
	initialState: initialCountState,
	reducers: {
		increment: (state) => {
			state.count += 1;
			state.loadingStatus = "loaded";
		},
		decrement: (state) => {
			state.count -= 1;
		},
		incrementByAmount: (state, { payload }: PayloadAction<number>) => {
			state.count += payload;
			state.loadingStatus = "error";
		},
		add: countAdapter.addOne,
		remove: countAdapter.removeOne,
	},
});

export const countReducer = countSlice.reducer;

export const countActions = countSlice.actions;

const { selectAll, selectEntities } = countAdapter.getSelectors();

export const getCountState = (state: {
	[COUNT_SLICE_KEY]: ICountState;
}): ICountState => {
	return state[COUNT_SLICE_KEY];
};

export const selectAllCount = createSelector(getCountState, selectAll);

export const selectCountEntities = createSelector(
	getCountState,
	selectEntities
);

export const selectCount = (state: {
	[COUNT_SLICE_KEY]: ICountState;
}): number => state[COUNT_SLICE_KEY].count;
