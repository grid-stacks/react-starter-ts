import React, { FC, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import {
	getUserState,
	userActions,
	IUserState,
	initialUserState,
} from "../../store/slices/user.slice";

const User: FC = () => {
	const userObject = useSelector(getUserState);

	const dispatch = useDispatch();

	const [user, setUser] = useState(initialUserState);

	const onUserChange = <P extends keyof IUserState>(
		prop: P,
		value: IUserState[P]
	) => {
		setUser({ ...user, [prop]: value });
	};

	const handleSubmit = () => {
		console.log(user);
		if (user.username && user.email && user.age)
			dispatch(userActions.updateUser(user));
	};

	return (
		<div>
			<h1>User Slice</h1>
			<input
				type="text"
				name="username"
				id="username"
				placeholder="Username"
				required
				onChange={(e) => onUserChange("username", e.target.value)}
			/>
			<input
				type="text"
				name="email"
				id="email"
				placeholder="Email"
				required
				onChange={(e) => onUserChange("email", e.target.value)}
			/>
			<input
				type="text"
				name="age"
				id="age"
				placeholder="Age"
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
