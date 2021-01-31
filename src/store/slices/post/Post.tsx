import React, { FC } from "react";

import { useGetTodoQuery } from "./post.slice";

const Post: FC = () => {
	const { data, error, isLoading } = useGetTodoQuery(2);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>{error}</div>;
	}

	return (
		<div>
			<h1>RTK Query</h1>
			<br />
			Todo: {data && data.title} | Completed:{" "}
			{data && data.completed.toString()}
		</div>
	);
};

export default Post;
