import React, { FC, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";

import ROUTER from "../consts/routers";

export interface Props {
	user: Record<string, unknown>;
	loginPath?: string;
	children: ReactElement;
}

/**
 *
 * Helper component for redirecting unauthorized user
 */
const ProtectedRouter: FC<Props> = ({
	user,
	loginPath = ROUTER.LOGIN,
	children,
	...rest
}: Props) => {
	return (
		<Route
			{...rest}
			render={() => {
				// If user, children will be rendered
				if (user) return children;
				// If no user, then redirect to login path
				if (!user) {
					return <Redirect to={{ pathname: loginPath }} />;
				}
				// Default return
				return null;
			}}
		></Route>
	);
};

export default ProtectedRouter;

// Use

// <Route path="/browse">
// 	 <Browse />
// </Route>

// <ProtectedRouter user={user} children={<Count />} loginPath='/login' path='/count' exact />
// <ProtectedRouter user={user} children={<Count />} path='/count' exact />
// <ProtectedRouter user={user} children={<Count />} path='/count' />
