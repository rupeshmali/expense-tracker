import React from 'react'

function Navbar({ updateModalStatus }) {
    return (
        <div className='navbar-div'>
            <div className="project-name">
                <h1>
                    Expense Tracker
                </h1>
            </div>
            <div className="add-trans-btn-div">
                <button onClick={updateModalStatus} className='add-transaction-btn'>Add Transaction</button>
            </div>
        </div>
    )
}

export default Navbar