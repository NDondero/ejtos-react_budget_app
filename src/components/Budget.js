import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, setBudget, currency, expenses } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const updatedBudget = event.target.value;
        if (expenses) {
            const totalExpenses = expenses.reduce((total, item) => {
                return (total = total + item.cost);
            }, 0);
            console.log(totalExpenses);
            if (updatedBudget < totalExpenses) {
                alert("You cannot reduce the budget value lower than the spending");
                return;
            }
        }
        setNewBudget(updatedBudget);
        setBudget(updatedBudget);
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;