import React, { FC, useEffect } from "react";

import { parallelArrayExample, parallelObjectExample } from "./providers";

const Async: FC = () => {
	useEffect(() => {
		parallelArrayExample();
		parallelObjectExample();
	}, []);

	return (
		<div>
			<h1>Async</h1>
		</div>
	);
};

export default Async;
