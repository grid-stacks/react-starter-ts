import React, { FC, useState, SyntheticEvent } from "react";

import { useTypedSelector, useAppDispatch } from "../../store";
import { selectCount, countActions } from "./count.slice";

const Count: FC = () => {
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

	const handleInputChange = (num: number) => {
		setAmount(num);
	};

	const [todoText, setTodoText] = useState<string>("");

	const handleTodoInputChange = (text: string) => {
		setTodoText(text);
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
					onChange={(e) =>
						handleInputChange(parseInt(e.target.value))
					}
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
				onChange={(e) => handleTodoInputChange(e.target.value)}
			/>
			<button onClick={handleTodoSubmit}>Add</button>
		</div>
	);
};

export default Count;
