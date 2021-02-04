import React, { FC } from "react";

import { Route, Switch, Link } from "react-router-dom";

import Count from "./count/Count";
import Post from "./post/Post";
import User from "./user/User";

import ROUTER from "../../../consts/routers";

const ExampleComponent: FC = () => {
	return (
		<div>
			<ul>
				<li>
					<Link to={ROUTER.USER}>User</Link>
				</li>
				<li>
					<Link to={ROUTER.COUNT}>Count</Link>
				</li>
				<li>
					<Link to={ROUTER.POST}>Post</Link>
				</li>
			</ul>
			<hr />
			<Switch>
				<Route path={ROUTER.USER}>
					<User />
				</Route>
				<Route path={ROUTER.COUNT}>
					<Count />
				</Route>
				<Route path={ROUTER.POST}>
					<Post />
				</Route>
			</Switch>
		</div>
	);
};

export default ExampleComponent;
