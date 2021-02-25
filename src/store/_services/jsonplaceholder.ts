import axios from "axios";

const accessToken = "";
const apiUrl = "https://jsonplaceholder.typicode.com";

export const axiosProvider = axios.create({
	baseURL: apiUrl,
	headers: {
		Authorization: `Token ${accessToken}`,
	},
});
