import axios from 'axios';
import React, { useContext, useState } from 'react'
import SERVER_URL from '../constants/constants';
import { ExpenseContext } from '../contexts/ExpenseProvider';
import { AiOutlineClose } from 'react-icons/ai';
import { TbLassoPolygon } from 'react-icons/tb';

function AddTransactionModal({isUpdateTransaction}) {
    const { ShowAddTransactionModal, setShowAddTransactionModal, dataToBeUpdated, setDataToBeUpdated, postExpense} = useContext(ExpenseContext);
    
    const [name, setName] = useState(dataToBeUpdated?.name);
    const [amount, setAmount] = useState(dataToBeUpdated?.amount);
    const [type, setType] = useState(dataToBeUpdated?.type);
    const [category, setCategory] = useState(dataToBeUpdated?.category);
    const [description, setDescription] = useState(dataToBeUpdated?.description);

    console.log("isUpdateTransaction :",isUpdateTransaction);
    console.log("dataToBeUpdated :",dataToBeUpdated);
    
    const { expenses, setExpenses, fetchExpenses } = useContext(ExpenseContext);
    const updateName = (e) => {
        console.log(e.target.value);
        setName(e.target.value);
    }
    const updateAmount = (e) => {
        console.log(e.target.value);
        setAmount(e.target.value);
    }
    const updateType = (e) => {
        console.log(e.target.value);
        setType(e.target.value);
    }
    const updateCategory = (e) => {
        console.log(e.target.value);
        setCategory(e.target.value);
    }
    const updateDescription = (e) => {
        console.log(e.target.value);
        setDescription(e.target.value);
    }

    const categories = [
        { name: 'Income', color: '#27ae60' },
        { name: 'Housing', color: '#2980b9' },
        { name: 'Utilities', color: '#f1c40f' },
        { name: 'Food & Dining', color: '#e74c3c' },
        { name: 'Transportation', color: '#2c3e50' },
        { name: 'Health & Fitness', color: '#c0392b' },
        { name: 'Entertainment', color: '#8e44ad' },
        { name: 'Shopping', color: '#f39c12' },
        { name: 'Education', color: '#16a085' },
        { name: 'Travel', color: '#34495e' },
        { name: 'Debt & Loans', color: '#e67e22' },
        { name: 'Savings', color: '#2ecc71' },
        { name: 'Investments', color: '#9b59b6' },
        { name: 'Taxes', color: '#d35400' },
        { name: 'Other', color: '#7f8c8d' }
    ];

    const handleAddTransaction = async (e) => {
        e.preventDefault();
        console.log("Btn-post-clicked");

        const transactionData = {
            name,
            amount,
            type,
            category,
            description
        }

        postExpense(transactionData);
        // console.log("DATA FOR POST-", transactionData);
        // const headers = {
        //     "Content-Type": "application/jsons"
        // }
        // const response = await axios.post(SERVER_URL, transactionData, headers)
        // console.log("Response from post : ", response.data);
        // setShowAddTransactionModal(false);
        // fetchExpenses();

    }
    return (
        <div className='add-transaction-modal' >
            <form className='modal-form' onSubmit={handleAddTransaction} action="">
                <span className='close-icon'>
                    <AiOutlineClose   onClick={() => { setShowAddTransactionModal(false);  setDataToBeUpdated(null);}} />
                </span>
                <div className="form-element">
                    <label htmlFor="">Name</label>
                    <input onChange={updateName} value={name} type="text" name="" id="" />
                </div>
                <div className="form-element">
                    <label htmlFor="">Amount</label>
                    <input onChange={updateAmount} value={amount} type="text" name="" id="" />
                </div>
                {/* <label htmlFor="">Type</label> */}

                <div className="form-element">
                    <label htmlFor="">Category</label>
                    <select value={category} className='category-drp-dwn' onChange={updateCategory} name="category" id="category">
                        {categories.map((category) => {
                            return <option value={`${category.name}`}>{category.name}</option>
                        })}
                    </select>
                </div>
                <div className="form-element">
                    <label htmlFor="">Description</label>
                    <textarea  value={description} onChange={updateDescription} name="" id="" cols="20" rows="5"></textarea>
                </div>
                <div className="form-element radio-btn-grp">
                    <input className='radio-btn'  onChange={updateType} type="radio" value="Credit" name='Type' />
                    <label >Credit</label>
                    <input className='radio-btn' onChange={updateType} type="radio" value="Debit" name='Type' />
                    <label >Debit</label>
                </div>
                <div className="form-btn">
                    <button className='submit-btn'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddTransactionModal