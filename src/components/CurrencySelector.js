import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const CurrencySelector = () => {
    const { dispatch, currency } = useContext(AppContext);
    const [selectedCurrency, setSelectedCurrency] = useState(currency);

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setSelectedCurrency(newCurrency);
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

    return (
        <div className='alert alert-secondary'>
            <label>Select Currency: </label>
            <select value={selectedCurrency} onChange={handleCurrencyChange}>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Ruppee (₹)</option>
            </select>
        </div>
    );
};

export default CurrencySelector;
