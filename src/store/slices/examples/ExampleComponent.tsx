import React, { FC } from "react";

import { Route, Switch, Link } from "react-router-dom";

import Count from "./count/Count";
import Post from "./post/Post";
import User from "./user/User";

const ExampleComponent: FC = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to="/user">User</Link>
				</li>
				<li>
					<Link to="/count">Count</Link>
				</li>
				<li>
					<Link to="/post">Post</Link>
				</li>
			</ul>
			<hr />
			<Switch>
				<Route path="/user">
					<User />
				</Route>
				<Route path="/count">
					<Count />
				</Route>
				<Route path="/post">
					<Post />
				</Route>
			</Switch>
		</div>
	);
};

export default ExampleComponent;
