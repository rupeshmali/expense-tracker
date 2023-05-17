import React, { useContext } from 'react'
import { ExpenseContext } from '../contexts/ExpenseProvider';
import Transaction from './Transaction';

function TransactionList() {
    const { expenses, setExpenses } = useContext(ExpenseContext);
    const recentExpenses = expenses.slice(Math.max(expenses.length - 8, 0))
    return (
        <div className='transactions-container'>

            <div className="transactions-list">
                {/* <div className="recent-trans-heading">
                    <h3>Recent Transactions</h3>
                </div> */}
                {recentExpenses.map((expense) => {
                    return (
                        <Transaction expense={expense} />
                    )
                })}
            </div>
        </div>
    )
}

export default TransactionList