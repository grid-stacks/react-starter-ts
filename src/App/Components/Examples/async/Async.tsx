import React, { FC, useEffect } from "react";

import { getUsersFromApi, getPostsFromApi } from "./providers";

const Async: FC = () => {
	useEffect(() => {
		getUsersFromApi();
		getPostsFromApi();
	}, []);

	return (
		<div>
			<h1>Async</h1>
		</div>
	);
};

export default Async;
