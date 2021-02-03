import { createApi, fetchBaseQuery } from "@rtk-incubator/rtk-query";

// Define a service using a base URL and expected endpoints
export const jsonPlaceholder = createApi({
	reducerPath: "jsonPlaceholder",
	baseQuery: fetchBaseQuery({
		baseUrl: "https://jsonplaceholder.typicode.com/",
	}),
	endpoints: (builder) => ({
		getTodos: builder.query({
			query: () => "todos",
		}),
		getTodo: builder.query({
			query: (id: number) => `todos/${id}`,
		}),
	}),
});

export const { useGetTodosQuery, useGetTodoQuery } = jsonPlaceholder;
