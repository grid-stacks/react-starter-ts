import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App/App";

// Optional measuring performance
// import reportWebVitals from "./reportWebVitals";

import store from "./store/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</StrictMode>,
	document.getElementById("root")
);

// Measuring performance of the app
// reportWebVitals(console.log);
