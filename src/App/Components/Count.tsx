import React, {
	FC,
	useState,
	useEffect,
	FormEvent,
	SyntheticEvent,
	ChangeEvent,
} from "react";

import { useSelector, useDispatch } from "react-redux";
import { selectCount, countActions } from "../../store/slices/count.slice";

const Count: FC = () => {
	const count = useSelector(selectCount);

	const dispatch = useDispatch();

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

	return (
		<div>
			<h1>Count Slice</h1>
			<form action="">
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
		</div>
	);
};

export default Count;
