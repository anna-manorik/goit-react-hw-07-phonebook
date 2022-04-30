import { createReducer } from '@reduxjs/toolkit';
import actions from './phonebook-action';

export const filterReducer = createReducer('', {
  [actions.changeFilter]: (state, { payload }) => payload,
});

