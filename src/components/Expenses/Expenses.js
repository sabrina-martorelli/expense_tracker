
import React, { useState } from 'react';

import Card from '../UI/Card.js';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;

    });

    return (
        <Card className="expenses">
            {/* Example of controlled component (two-way binding) */}
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler} />
            <ExpensesChart expenses={filteredExpenses} />
            <ExpensesList items={filteredExpenses} />


            {/* Solution using ternary operator (see ExpensesList for new solution)
            {filteredExpenses.length === 0
                ? <p>No expenses found.</p>
                : filteredExpenses.map((expense) => (
                    <ExpenseItem
                        key={expense.id}
                        expenseDate={expense.date}
                        expenseTitle={expense.title}
                        expenseAmount={expense.amount}
                    />
                ))} */}






        </Card>


    );
}

export default Expenses;