import React, { FC, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";

import ROUTER from "../consts/routers";

export interface Props {
	children: ReactElement;
	user: Record<string, unknown> | null;
	dashboardPath?: string;
	[name: string]: unknown; // Accepts any number of object property; key will be string and value will be any
}

/**
 *
 * Helper component for redirecting if already authorized
 * Mainly for preventing authorized user to login, register etc. routes
 */
const AuthorizedRouter: FC<Props> = ({
	children,
	user,
	dashboardPath = ROUTER.DASHBOARD,
	...rest
}: Props) => {
	const res = () => {
		// If no user, children will be rendered
		if (!user) return children;
		// If user, then redirect to dashboard path
		if (user) {
			return <Redirect to={{ pathname: dashboardPath }} />;
		}
		// Default return
		return null;
	};

	return <Route {...rest} render={res}></Route>;
};

export default AuthorizedRouter;

// Use

// <ProtectedRouter user={user} path={ROUTER.COUNT} exact loginPath='/login'>
//	 <Count />
// </ProtectedRouter>;
// <ProtectedRouter user={user} path={ROUTER.COUNT} exact>
//	 <Count />
// </ProtectedRouter>;
// <ProtectedRouter user={user} path={ROUTER.COUNT}>
//	 <Count />
// </ProtectedRouter>;
