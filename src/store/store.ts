import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import {
	configureStore,
	getDefaultMiddleware,
	Action,
	Store,
	applyMiddleware,
	EnhancedStore,
} from "@reduxjs/toolkit";

import { createLogger } from "redux-logger";
import { ThunkAction } from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { createInjectorsEnhancer, forceReducerReload } from "redux-injectors";
import { routerMiddleware } from "connected-react-router";
import {
	getFirebase,
	actionTypes as rrfActionTypes,
} from "react-redux-firebase";
import { constants as rfConstants } from "redux-firestore";

import createReducer from "./rootReducers";
import { jsonPlaceholder } from "../App/Components/Examples/post/post.slice";
import history from "../helpers/history";

export function configureAppStore(initialState = {}): EnhancedStore {
	// Logger configuration
	const logger = createLogger({
		collapsed: true,
		duration: true,
	});

	// Saga setup
	const reduxSagaMonitorOptions = {};
	const sagaMiddleware = createSagaMiddleware(reduxSagaMonitorOptions);
	const { run: runSaga } = sagaMiddleware;

	const extraArgument = { getFirebase };

	const middleware = [
		...getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [
					// just ignore every redux-firebase and react-redux-firebase action type
					...Object.keys(rfConstants.actionTypes).map(
						(type) => `${rfConstants.actionsPrefix}/${type}`
					),
					...Object.keys(rrfActionTypes).map(
						(type) => `@@reactReduxFirebase/${type}`
					),
				],
				ignoredPaths: ["firebase", "firestore"],
			},
			thunk: {
				extraArgument,
			},
		}),
		logger,
		jsonPlaceholder.middleware,
		routerMiddleware(history), // History middleware injection
		sagaMiddleware, // Saga middleware injection
	];

	const enhancers = [
		applyMiddleware(...middleware),
		createInjectorsEnhancer({
			createReducer,
			runSaga,
		}),
	];

	const store: Store = configureStore({
		reducer: createReducer(),
		preloadedState: initialState,
		devTools: process.env.NODE_ENV !== "production",
		enhancers,
	});

	if (module.hot) {
		module.hot.accept("./rootReducers", () => {
			forceReducerReload(store);
		});
	}

	return store;
}

const store = configureAppStore();
export const rootReducers = createReducer();

export type RootState = ReturnType<typeof rootReducers>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;
export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
