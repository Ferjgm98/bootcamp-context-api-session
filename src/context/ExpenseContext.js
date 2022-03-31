import { createContext } from "react";

const initialValue = {
	transactions: [],
	setTransactions: null,
};

export const ExpenseContext = createContext(initialValue);
