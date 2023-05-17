import axios from "axios";
import { createContext, useEffect, useState } from "react";
import SERVER_URL from "../constants/constants";

export const ExpenseContext = createContext();

const ExpenseProvider = ({children})=>{
    const [expenses,setExpenses] = useState([]);
    const [ShowAddTransactionModal, setShowAddTransactionModal] = useState(false);

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
        ShowAddTransactionModal,
        setShowAddTransactionModal

    }

    return (
        <ExpenseContext.Provider value={values}>
            {children}    
        </ExpenseContext.Provider>
    )
}

export default ExpenseProvider;