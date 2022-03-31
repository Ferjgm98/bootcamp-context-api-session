import { useContext, useMemo } from "react";
import { ExpenseContext } from "../context/ExpenseContext";
import SplittedBalance from "./SplittedBalance";

function Balance() {
	const { transactions } = useContext(ExpenseContext);

	const total = useMemo(
		() => transactions.reduce((acc, curr) => acc + Number(curr.amount), 0),
		[transactions]
	);

	return (
		<div className="py-8">
			<div>
				<h3 className="uppercase text-xl">Your balance</h3>
				<p className="text-4xl font-semibold py-2">$ {total?.toFixed(2)}</p>
			</div>
			<SplittedBalance />
		</div>
	);
}

export default Balance;
