import React from 'react';
import { useDispatch } from 'react-redux';
import { Header } from './Header';
import { Body } from './Body';
import { DELETE_ALL_REMINDERS } from '../actions/types';

export const Calendar = () => {
  const dispatch = useDispatch();
  
  const deleteAllReminders = () => {
    dispatch({ type: DELETE_ALL_REMINDERS });
  };

  return (
    <div>
      <table width="100%">
        <Header />
        <Body />
      </table>
      <button type="button" className="btn btn-primary" onClick={deleteAllReminders}>
        Delete All
      </button>
    </div>
  );
};
