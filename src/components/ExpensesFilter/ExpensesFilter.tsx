import { useState } from 'react';
import Card from '../Card/Card';
import './ExpensesFilter.scss';

const ExpensesFilter = (props : any) => {
  const yearHandler = (e: any) => {
    props.onYearSelected(e.target.value)
  }

  return (
    <Card>
      <div className='expenses-filter'>
        <div className='expenses-filter-control'>
          <label>Filter by year</label>
          <select value={props.selected} onChange={yearHandler}>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    </Card>
  );
};

export default ExpensesFilter;