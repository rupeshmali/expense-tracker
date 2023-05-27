import React, { useContext, useState } from 'react'
import { TbEdit } from 'react-icons/tb';
import { RiDeleteBin6Line } from 'react-icons/ri'
import AddTransactionModal from './AddTransactionModal';
import { ExpenseContext } from '../contexts/ExpenseProvider';
function Transaction({ expense }) {
    const { setDataToBeUpdated,deleteExpense } = useContext(ExpenseContext);


    const displayTransactionModal = () => {
        setDataToBeUpdated(expense);
    }
    const handleDelete = () =>{
        deleteExpense(expense.id);
    }
    return (
        <div key={expense.id} className='single-transaction' >
            <div className="name-icon-wrapper">
                <div className="transaction-name"><p className=''>{expense.name}</p></div>
                <div className="icons-wrapper">
                    <div><TbEdit className='edit-icon' onClick={displayTransactionModal} /></div>
                    <div><RiDeleteBin6Line className="delete-icon" onClick={handleDelete}/></div>
                </div>
            </div>
            <div className={expense.type === 'Credit' ? 'color-green transaction-amount' : 'color-red transaction-amount'} >
                <p >{expense.type === 'Credit' ? ' + ' : ' - '}₹{expense.amount}</p>
            </div>
        </div>
    )
}

export default Transaction