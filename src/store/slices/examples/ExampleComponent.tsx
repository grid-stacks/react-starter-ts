import React, { FC } from "react";

import { Route, Switch, Link } from "react-router-dom";

import Loadable from "../../../helpers/Loadable";
import ProtectedRouter from "../../../helpers/ProtectedRouter";

import ROUTER from "../../../consts/routers";

const FB = {
	fallback: <div>Loading...</div>,
};

const User = Loadable(() => import("./user/User"), FB);
const Count = Loadable(() => import("./count/Count"), FB);
const Post = Loadable(() => import("./post/Post"), FB);

// const user = null;
const user = { name: "DHN Chandan" };

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
				<li>
					<Link to={ROUTER.LOGIN}>Login</Link>
				</li>
			</ul>
			<hr />
			<Switch>
				<ProtectedRouter
					user={user}
					loginPath={ROUTER.LOGIN}
					path={ROUTER.USER}
					exact
				>
					<User />
				</ProtectedRouter>
				<ProtectedRouter user={user} path={ROUTER.COUNT} exact>
					<Count />
				</ProtectedRouter>
				<ProtectedRouter user={user} path={ROUTER.POST}>
					<Post />
				</ProtectedRouter>
				<Route path={ROUTER.LOGIN}>
					<div>
						<h1>Login</h1>
					</div>
				</Route>
			</Switch>
		</div>
	);
};

export default ExampleComponent;
