import React, { useEffect, useState } from 'react';
import './App.css';
import CurrencyRow from './CurrencyRow';

const BASE_URL = 'https://api.exchangerate.host/latest'

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([])

  useEffect(() => {
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setCurrencyOptions([data.base, data.rates])
      })
  }, [])

  return (
    <>
      <h1>Convert</h1>
      <CurrencyRow />
      <div className="equals">=</div>
      <CurrencyRow />
    </>
  );
}

export default App;
