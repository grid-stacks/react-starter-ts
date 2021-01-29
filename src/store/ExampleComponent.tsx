import React, { FC } from "react";

import Count from "./slices/count/Count";
import User from "./slices/user/User";

const ExampleComponent: FC = () => {
	return (
		<div>
			<hr />
			<User />
			<hr />
			<Count />
		</div>
	);
};

export default ExampleComponent;
