import React, { useReducer, createContext } from 'react';
import contextReducer from './contextReducer';

const initialState = JSON.parse(localStorage.getItem('transactions')) || [{ amount: 1000, category: "Travel", date: "2022-10-18", id: "d994c322-371b-4718-9ac2-c04f152c5d56", type: "Expense" }, { amount: 2000, category: "Car", date: "2022-10-19", id: "047bb05f-9234-4500-925c-7d1709b4c077", type: "Expense" }, { amount: 3000, category: "Clothes", date: "2022-10-20", id: "8f90c7fd-90ca-4716-85e7-7b1c55217ed4", type: "Expense" }, {amount: 3000, category: "Entertainment", date: "2022-10-15", id: "8d6233ec-4a32-4d9c-bfa3-bd21ab7435da", type: "Expense" }, { amount: 2000, category: "Extra income", date: "2022-10-19", id: "39c9b2df-a404-4849-ab06-b036c1f3a137", type: "Income" }, { amount: 3000, category: "Investments", date: "2022-10-18", id: "32b813f6-d0a2-4a4a-ab23-5f3f1179e169", type: "Income" }, {amount: 20000, category: "Salary", date: "2022-10-15", id: "e1c67b3a-ca89-47e0-a72c-82c7fe41e357", type: "Income"}];

export const ExpenseTrackerContext = createContext(initialState);

export const Provider = ({ children }) => {
  const [transactions, dispatch] = useReducer(contextReducer, initialState);

  // Action Creators
  const deleteTransaction = (id) => {
    dispatch({ type: 'DELETE_TRANSACTION', payload: id });
  }

  const addTransaction = (transition) => {
    dispatch({ type: 'ADD_TRANSACTION', payload: transition });
  }

  const balance = transactions.reduce((acc, currValue) => {
    return (currValue.type === 'Expense' ? acc - currValue.amount : acc + currValue.amount)
  }, 0)

  return (
    <ExpenseTrackerContext.Provider value={{
      deleteTransaction,
      addTransaction,
      transactions,
      balance
    }}>
      {children}
    </ExpenseTrackerContext.Provider>
  )
}