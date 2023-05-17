import React, { useContext, useState } from 'react'
import AddTransactionModal from '../components/AddTransactionModal';
import Navbar from '../components/common/Navbar';
import TransactionList from '../components/TransactionList';
import Dashboard from '../components/Dashboard';
import { ExpenseContext } from '../contexts/ExpenseProvider';

function Home() {
    const { ShowAddTransactionModal, setShowAddTransactionModal} = useContext(ExpenseContext);

    const updateModalStatus = () => {
        setShowAddTransactionModal(true);
    }
    return (
        <div className='home-container'>
                <Navbar updateModalStatus={updateModalStatus}/>
             
              
            <div className='modal-container'>
                {ShowAddTransactionModal && <AddTransactionModal />}
            </div>
            <div className='transactionlist-and-dashboard-container'>
                < TransactionList />
                < Dashboard />
            </div>
        </div>

    )
}

export default Home