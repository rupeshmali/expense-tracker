import React from 'react'

function Navbar({ updateModalStatus }) {
    return (
        <div className='navbar-div'>
            <div className="project-name">
                <h1>
                    <span className='color-red project-title padding'>Expense</span>
                    <span className='color-green project-title'>Tracker</span>
                    {/* <span className='color-blue project-title'></span> */}
                </h1>
            </div>
            <div className="add-trans-btn-div">
                <button onClick={updateModalStatus} className='add-transaction-btn'>Add Transaction</button>
            </div>
        </div>
    )
}

export default Navbar