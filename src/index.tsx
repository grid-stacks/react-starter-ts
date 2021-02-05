import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

// Optional measuring performance
// import reportWebVitals from "./reportWebVitals";

import { Provider } from "react-redux";
import store from "./store/store";

import { ConnectedRouter } from "connected-react-router";
import history from "./helpers/history";

import App from "./App/App";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<ConnectedRouter history={history}>
					<App />
				</ConnectedRouter>
			</BrowserRouter>
		</Provider>
	</StrictMode>,
	document.getElementById("root")
);

// Measuring performance of the app
// reportWebVitals(console.log);
