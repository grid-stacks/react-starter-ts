import { axiosProvider } from "../../../../store/_services/jsonplaceholder";

export const getUsersFromApi = async () => {
	return await axiosProvider.get("/users");
};

export const getPostsFromApi = async () => {
	return await axiosProvider.get("/posts");
};
