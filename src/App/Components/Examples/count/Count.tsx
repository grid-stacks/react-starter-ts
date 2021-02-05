import React, { FC, useState, SyntheticEvent, ChangeEvent } from "react";

import { useInjectSaga } from "redux-injectors";

import { useTypedSelector, useAppDispatch } from "../../../../store/store";
import { selectCount, countActions } from "./count.slice";
import {
	watchIncrementAsync,
	watchDecrementAsync,
	countComponentSaga,
} from "./count.sagas";

const Count: FC = () => {
	// Activating count sagas
	useInjectSaga({ key: "countIncrement", saga: watchIncrementAsync }); // Calling single saga
	useInjectSaga({ key: "countDecrement", saga: watchDecrementAsync }); // Calling single saga
	useInjectSaga({ key: "countAll", saga: countComponentSaga }); // Calling multiple sagas

	const count = useTypedSelector(selectCount);

	const dispatch = useAppDispatch();

	const handleIncrement = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(countActions.increment());
	};

	const handleIncrementByNumber = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(countActions.incrementByAmount(amount));
	};

	const handleDecrement = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(countActions.decrement());
	};

	const [amount, setAmount] = useState(0);
	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setAmount(+e.target.value);
	};

	const [todoText, setTodoText] = useState<string>("");
	const handleTodoInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		setTodoText(e.target.value);
	};

	const handleTodoSubmit = (e: SyntheticEvent) => {
		e.preventDefault();
		dispatch(countActions.addTodos(todoText));
		setTodoText("");
	};

	return (
		<div>
			<h1>Count Slice</h1>
			<form>
				<input
					type="text"
					name="number"
					id="number"
					onChange={handleInputChange}
				/>
				<button onClick={handleIncrement}>Increase</button>
				<button onClick={handleDecrement}>Decrement</button>
				<button onClick={handleIncrementByNumber}>
					Increment by Number
				</button>
			</form>
			<br />
			<h3>Count value: {count}</h3>
			<br />
			<br />
			<h2>Todo add</h2>
			<input
				type="text"
				name="todo"
				id="todo"
				placeholder="Todo text"
				value={todoText}
				onChange={handleTodoInputChange}
			/>
			<button onClick={handleTodoSubmit}>Add</button>
		</div>
	);
};

export default Count;
