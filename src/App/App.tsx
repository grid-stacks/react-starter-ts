import React, { FC } from "react";
import Count from "./Components/Count";
import User from "./Components/User";

const App: FC = () => {
	return (
		<div className="App">
			<h1>React Starter TS!</h1>
			<hr />
			<Count />
			<hr />
			<User />
		</div>
	);
};

export default App;
