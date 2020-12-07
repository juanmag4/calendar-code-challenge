import React, { useEffect} from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';
import { Day } from './Day';
import { getFirstDayOfMonth, sortDays } from '../utils.ts';
import { RESET, DELETE_ALL_REMINDERS } from '../actions/types';

export const Body = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: RESET });
  }, []);

  const getEmptyDays = () => {
    const emptyDays = [];
    for (let i = 0; i < getFirstDayOfMonth(); i++) {
      emptyDays.push(
        <Day numberDay="" />
      );
    }

    return emptyDays;
  };

  const getDays = () => {
    let daysOfMonth = [];
    for (let d = 1; d <= moment().daysInMonth(); d++) {
      daysOfMonth.push(
        <Day numberDay={d} />
      );
    }

    return daysOfMonth;
  };

  const renderDays = () => {
    const days = getEmptyDays().concat(getDays());
    const rows = sortDays(days)

    return rows.map((d: any, i: number) => {
      return <tr>{d}</tr>;
    });
  };

  const deleteAllReminders = () => {
    dispatch({ type: DELETE_ALL_REMINDERS });
  };

  return (
    <>
      {renderDays()}
      <br />
      <button type="button" className="btn btn-primary" onClick={deleteAllReminders}>
        Delete All
      </button>
    </>
  )
};
