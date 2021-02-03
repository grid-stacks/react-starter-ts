import React, { FC } from "react";

import Count from "./count/Count";
import Post from "./post/Post";
import User from "./user/User";

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
