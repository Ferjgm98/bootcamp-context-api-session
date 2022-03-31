import { useContext } from "react";
import { ExpenseContext } from "../context/ExpenseContext";

function HistoricalList() {
	const { transactions } = useContext(ExpenseContext);

	return (
		<div className="my-4">
			<h3 className="text-2xl border-b border-gray-500 pb-2 mb-2">History</h3>
			<ul>
				{transactions.map((transaction) => (
					<li
						key={transaction.id}
						className={`bg-white shadow-md my-3 p-3 flex justify-between border-r-4 ${
							transaction.amount > 0 ? "border-green-500" : "border-red-500"
						} `}
					>
						<p className="font-semibold">{transaction.title}</p>
						<p className="font-semibold">$ {transaction.amount}</p>
					</li>
				))}
			</ul>
		</div>
	);
}

export default HistoricalList;
