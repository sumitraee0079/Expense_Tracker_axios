import React from 'react';
import { Header } from './Header';
import { Balance } from './Balance';
import { IncomeExpenses } from './IncomeExpenses';
import { TransactionList } from './TransactionList';
import AddTransaction from './AddTransaction';
import { GlobalProvider } from '../context/GlobalState';
//import Premium from './Premium';

function Expenses() {
  return (
    <GlobalProvider>
      <Header />
      <div className="container">
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
        {/*<Premium />*/}
      </div>
    </GlobalProvider>
  );
}

export default Expenses;