import React, { FC } from "react";

import Count from "./slices/count/Count";
import Post from "./slices/post/Post";
import User from "./slices/user/User";

const ExampleComponent: FC = () => {
	return (
		<div>
			<hr />
			<User />
			<hr />
			<Count />
			<hr />
			<Post />
		</div>
	);
};

export default ExampleComponent;
