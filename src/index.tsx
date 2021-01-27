import React, { StrictMode } from "react";
import ReactDOM from "react-dom";

import App from "./App/App";

// Optional measuring performance
// import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
	<StrictMode>
		<App />
	</StrictMode>,
	document.getElementById("root")
);

// Measuring performance of the app
// reportWebVitals(console.log);
