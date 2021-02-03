import React, { FC, useState } from "react";

import { useTypedSelector, useAppDispatch } from "../../../store";

import {
	getUserState,
	userActions,
	IUserState,
	initialUserState,
} from "./user.slice";

const User: FC = () => {
	const userObject = useTypedSelector(getUserState);

	const dispatch = useAppDispatch();

	const [user, setUser] = useState(initialUserState);

	const onUserChange = <P extends keyof IUserState>(
		prop: P,
		value: IUserState[P]
	) => {
		setUser({ ...user, [prop]: value });
	};

	const handleSubmit = () => {
		if (user.username && user.email && user.age) {
			dispatch(userActions.updateUser(user));
			setUser(initialUserState);
		}
	};

	return (
		<div>
			<h1>User Slice</h1>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Username"
				value={user.username}
				required
				onChange={(e) => onUserChange("username", e.target.value)}
			/>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email"
				value={user.email}
				required
				onChange={(e) => onUserChange("email", e.target.value)}
			/>
			<input
				type="text"
				name="age"
				id="age"
				placeholder="Age"
				value={user.age}
				required
				onChange={(e) => onUserChange("age", parseInt(e.target.value))}
			/>
			<input type="submit" value="Submit" onClick={handleSubmit} />
			<br />
			<br />
			Username: {userObject.username} | Email: {userObject.email} | Age:{" "}
			{userObject.age}
			<br />
			Loading: {userObject.loadingStatus} | Error: {userObject.error}
		</div>
	);
};

export default User;
