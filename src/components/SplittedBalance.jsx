import { useContext, useMemo } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function SplittedBalance() {
	const { transactions } = useContext(ExpenseContext);

	const totalIncome = useMemo(
		() =>
			transactions.reduce(
				(acc, curr) =>
					Number(curr.amount) > 0 ? acc + Number(curr.amount) : acc,
				0
			),
		[transactions]
	);

	const totalExpense = useMemo(
		() =>
			transactions.reduce(
				(acc, curr) =>
					Number(curr.amount) < 0 ? acc + Number(curr.amount) : acc,
				0
			),
		[transactions]
	);
	return (
		<div className="bg-white py-6 px-10 flex justify-between w-full shadow-lg my-4">
			<div className="w-1/2 text-center border-r">
				<p className="uppercase text-xl pb-2">Income</p>
				<p className="text-green-500 font-semibold text-xl">
					$ {totalIncome.toFixed(2)}
				</p>
			</div>
			<div className="w-1/2 text-center">
				<p className="uppercase text-xl pb-2">Expense</p>
				<p className="text-red-500 font-semibold text-xl">
					$ {(totalExpense * -1).toFixed(2)}
				</p>
			</div>
		</div>
	);
}

export default SplittedBalance;
