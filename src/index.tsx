import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

// Optional measuring performance
// import reportWebVitals from "./reportWebVitals";

import store from "./store/store";
import { Provider } from "react-redux";

import App from "./App/App";

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
