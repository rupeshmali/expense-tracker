import React, { useContext, useState } from 'react'
import { TbEdit } from 'react-icons/tb';
import AddTransactionModal from './AddTransactionModal';
import { ExpenseContext } from '../contexts/ExpenseProvider';
function Transaction({ expense }) {
    const { ShowAddTransactionModal, setShowAddTransactionModal } = useContext(ExpenseContext);
    const [dataToBeUpdated, setDataToBeUpdated] = useState({});
    const displayTransactionModal = () => {
        console.log("edit clicked for - ",expense.name);
        setShowAddTransactionModal(true);
        setDataToBeUpdated(expense);
    }
    return (
        <div key={expense.id} className='single-transaction' >
            <div className="name-icon-wrapper">
                <div className="transaction-name"><p className=''>{expense.name}</p></div>
                <div><TbEdit className='edit-icon' onClick={displayTransactionModal} /></div>
            </div>
            <div className={expense.type === 'Credit' ? 'color-green transaction-amount' : 'color-red transaction-amount'} >
                <p >{expense.type === 'Credit' ? ' + ' : ' - '}${expense.amount}</p>
            </div>
            {ShowAddTransactionModal && <AddTransactionModal isUpdateTransaction={true} expenseDataforUpdate={dataToBeUpdated} />}
        </div>
    )
}

export default Transaction