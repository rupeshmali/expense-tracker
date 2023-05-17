import React from 'react'
import { Pie, PieChart } from 'recharts';

function Dashboard() {
    const data = [
        { name: 'Geeksforgeeks', students: 400, fill: '#57c0e8' },
        { name: 'Technical scripter', students: 700, fill: "#FF6565"},
        { name: 'Geek-i-knack', students: 200, fill: "#FFDA83"},
        { name: 'Geek-o-mania', students: 100, fill: "purple" }
    ];


    return (
        <div className='dashboard-container'>
            <div className="dashboard-elements-wrapper">
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
                <div className="dashboard-element">
                    <div>Total Balance</div><div>$50000</div>
                </div>
            </div>
            <div className="pie-chart">
                <PieChart width={600} height={600}>
                    <Pie data={data} dataKey="students" outerRadius={250} fill="#fff" />
                </PieChart>
            </div>
        </div >
    )
}

export default Dashboard