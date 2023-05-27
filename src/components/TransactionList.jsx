import React, { useContext } from 'react'
import { ExpenseContext } from '../contexts/ExpenseProvider';
import Transaction from './Transaction';
import AddTransactionModal from './AddTransactionModal';

function TransactionList() {
    const { expenses, setExpenses, dataToBeUpdated } = useContext(ExpenseContext);
    const recentExpenses = expenses.slice(Math.max(expenses.length - 5, 0))
    return (
        <div className='transactions-container'>
            <div className="transactions-heading">
                Transactions
            </div>
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
                {dataToBeUpdated && <AddTransactionModal isUpdateTransaction />}
        </div>

    )
}

export default TransactionList