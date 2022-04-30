import React from 'react';
import actions from '../../redux/phonebook-action';
import { useSelector, useDispatch } from 'react-redux';

const Filter = () => {
  const filterValue = useSelector(state => state.filterReducer);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(actions.changeFilter(e.target.value));
  };

  return (
    <label>
      Search:
      <input type="text" value={filterValue} onChange={changeFilter} />
    </label>
  );
};

export default Filter;
