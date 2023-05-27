import axios from "axios";
import { createContext, useEffect, useState } from "react";
import SERVER_URL from "../constants/constants";

export const ExpenseContext = createContext();

const ExpenseProvider = ({children})=>{
    const [expenses,setExpenses] = useState([]);
    const [ShowAddTransactionModal, setShowAddTransactionModal] = useState(false);
    const [dataToBeUpdated, setDataToBeUpdated] = useState(null);

    const postExpense = async (transactionData)=>{
        console.log("DATA FOR POST-", transactionData);
        const headers = {
            "Content-Type": "application/jsons"
        }
        const response = await axios.post(SERVER_URL, transactionData, headers)
        console.log("Response from post : ", response.data);
        setShowAddTransactionModal(false);
        fetchExpenses();

    }

    const deleteExpense = async (expenseId) =>{
        const response  = await axios.delete(SERVER_URL + '/' + expenseId);
        fetchExpenses();
    }

    const fetchExpenses = async ()=>{
        const response = await axios.get(SERVER_URL);
        setExpenses(response.data);
        console.log("Fetched data:",response.data);
    }

    useEffect(()=>{
        fetchExpenses();
    },[]);

    const values = {
        expenses,
        setExpenses,
        fetchExpenses,
        postExpense,
        deleteExpense,
        ShowAddTransactionModal,
        setShowAddTransactionModal,
        dataToBeUpdated,
        setDataToBeUpdated

    }

    return (
        <ExpenseContext.Provider value={values}>
            {children}    
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;