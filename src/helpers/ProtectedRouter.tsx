import React, { FC, ReactElement } from "react";
import { Route, Redirect } from "react-router-dom";

import ROUTER from "../consts/routers";

export interface Props {
	user: Record<string, unknown> | null;
	loginPath?: string;
	children: ReactElement;
	[name: string]: unknown; // Accepts any number of object property; key will be string and value will be any
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
	const res = () => {
		// If user, children will be rendered
		if (user) return children;
		// If no user, then redirect to login path
		if (!user) {
			return <Redirect to={{ pathname: loginPath }} />;
		}
		// Default return
		return null;
	};

	return <Route {...rest} render={res}></Route>;
};

export default ProtectedRouter;

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
