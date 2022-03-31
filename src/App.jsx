import { useMemo, useState } from "react";
import AddNewTransaction from "./components/AddNewTransaction";
import Balance from "./components/Balance";
import HistoricalList from "./components/HistoricalList";
import { ExpenseContext } from "./context/ExpenseContext";

function App() {
	const [transactions, setTransactions] = useState([]);

	return (
		<ExpenseContext.Provider
			value={{
				transactions,
				setTransactions,
			}}
		>
			<div className="bg-gray-50 p-4">
				<div className="w-full md:w-2/4 lg:w-1/3 mx-auto py-8">
					<h1 className="text-2xl font-semibold">Expense Tracker</h1>
					{/* Balance component */}
					<Balance />
					{/* Historical component */}
					<HistoricalList />
					{/* Form component */}
					<AddNewTransaction />
				</div>
			</div>
		</ExpenseContext.Provider>
	);
}

export default App;
