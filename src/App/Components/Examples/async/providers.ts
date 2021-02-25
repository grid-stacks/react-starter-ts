import { AsyncFunction, parallel } from "async";
import { axiosProvider } from "../../../../store/_services/jsonplaceholder";

export const getUsersFromApi: AsyncFunction<unknown, Error> = (callback) => {
	axiosProvider
		.get("/users")
		.then((result) => callback(null, result.data))
		.catch((e) => callback(e, null));
};

export const getPostsFromApi: AsyncFunction<unknown, Error> = (callback) => {
	axiosProvider
		.get("/posts")
		.then((result) => callback(null, result.data))
		.catch((e) => callback(e, null));
};

export const parallelArrayExample = (): void =>
	parallel(
		[getUsersFromApi, getPostsFromApi],
		// Callback function which are calling in each function
		(err, results) => {
			console.log({ err, results });
		}
	);

export const parallelObjectExample = (): void =>
	parallel(
		{ users: getUsersFromApi, posts: getPostsFromApi },
		// Callback function which are calling in each function
		(err, results) => {
			console.log({ err, results });
		}
	);
