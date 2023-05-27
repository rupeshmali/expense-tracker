import React, { useContext, useEffect, useState } from 'react'
import { Pie, PieChart } from 'recharts';
import { ExpenseContext } from '../contexts/ExpenseProvider';

function Dashboard() {
    const { expenses } = useContext(ExpenseContext);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalDebit, setTotalDebit] = useState(0);

    const calculateDashboardDetails = () => {
        let myTotalCredit = 0;
        expenses.forEach(expense => {
            console.log("Expense :", expense);
            if (expense.type == 'Credit') {
                myTotalCredit = myTotalCredit + parseInt(expense.amount);
            }
            console.log("myTotalCredit :", myTotalCredit);
        });
        setTotalCredit(myTotalCredit);

        let myTotalDebit = 0;
        expenses.forEach(expense => {
            console.log("Expense :", expense);
            if (expense.type == 'Debit') {
                myTotalDebit = myTotalDebit + parseInt(expense.amount);
            }
            console.log("myTotalCredit :", myTotalDebit);
        });
        setTotalDebit(myTotalDebit);



    }
    useEffect(() => {
        calculateDashboardDetails();
    }, [expenses])

    const transactionsData = [
        { name: 'Income', amount: totalCredit, fill: '#B7FFBF' },
        { name: 'Expense', amount: totalDebit, fill: "#ffa3a6" },
    ];


    return (
        <div className='dashboard-container-main'>
            <div className="dashboard-heading">
                Overview
            </div>
            <div className="dashboard-container">
                <div className="dashboard-tiles-wrapper">
                    <div className="dashboard-element total-balance-div">
                        <div>Total Balance</div><div className='color-blue'>₹{totalCredit - totalDebit}</div>
                    </div>
                    <div className="dashboard-elements-wrapper">
                        <div className="dashboard-element">
                            <div>Total Income</div><div className='color-green'>+ ₹{totalCredit}</div>
                        </div>
                        <div className="dashboard-element">
                            <div>Total Expense</div><div className='color-red'>- ₹{totalDebit}</div>
                        </div>
                    </div>
                </div>
                <div className="pie-chart">
                    <PieChart width={400} height={400}>
                        <Pie data={transactionsData} dataKey="amount" outerRadius={150} fill="#fff" />
                    </PieChart>
                </div>
            </div>
        </div >
    )
}

export default Dashboard