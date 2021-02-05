import React, { FC } from "react";

import { Route, Switch, Link } from "react-router-dom";

import Loadable from "../../../helpers/Loadable";

import ROUTER from "../../../consts/routers";

const FB = {
	fallback: <div>Loading...</div>,
};

const User = Loadable(() => import("./user/User"), FB);
const Count = Loadable(() => import("./count/Count"), FB);
const Post = Loadable(() => import("./post/Post"), FB);

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
