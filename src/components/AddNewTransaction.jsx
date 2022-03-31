import { v4 as uuid } from "uuid";
import { useContext, useState } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function AddNewTransaction() {
	const { setTransactions } = useContext(ExpenseContext);
	const [value, setValue] = useState({
		id: -1,
		title: "",
		amount: 0,
	});

	const onInputChange = (e) => {
		const { value, name } = e.target;

		setValue((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const onSubmitForm = (e) => {
		e.preventDefault();

		const id = uuid();

		setValue((prevState) => ({
			...prevState,
			id,
		}));

		setTransactions((prevState) => [...prevState, value]);
	};

	return (
		<div className="my-8">
			<h3 className="text-2xl border-b border-gray-500 pb-2 mb-2">
				Add new transaction
			</h3>
			<form onSubmit={onSubmitForm}>
				<div className="py-2 flex flex-col">
					<label htmlFor="title">Title</label>
					<input
						type="text"
						name="title"
						className="my-2 border border-gray-500 px-4 py-2"
						placeholder="Salary"
						onChange={onInputChange}
						value={value.title}
					/>
				</div>
				<div className="py-2 flex flex-col">
					<label htmlFor="amount">Amount</label>
					<input
						type="number"
						name="amount"
						placeholder="1000.00"
						className="my-2 border border-gray-500 px-4 py-2"
						onChange={onInputChange}
						value={value.amount}
					/>
				</div>
				<div className="py-3">
					<button
						type="submit"
						className="border bg-purple-500 w-full p-3 text-white font-semibold"
					>
						Add Transaction
					</button>
				</div>
			</form>
		</div>
	);
}

export default AddNewTransaction;
