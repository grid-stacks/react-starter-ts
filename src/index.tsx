import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

// Optional measuring performance
// import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store/store";

import { ConnectedRouter } from "connected-react-router";
import history from "./helpers/history";

import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { rrfProps } from "./store/_providers/firebase";

import App from "./App/App";
import "./styles/index.css";

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...rrfProps}>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</ReactReduxFirebaseProvider>
		</Provider>
	</StrictMode>,
	document.getElementById("root")
);

// Measuring performance of the app
// reportWebVitals(console.log);
