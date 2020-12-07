import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import { Reminder } from './Reminder';
import { EDIT_REMINDER, DELETE_REMINDER, SELECT_DAY } from '../actions/types';
import { WEEKEND_DAYS } from '../constants';

export const Day = ({ numberDay }: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { reminders } = useSelector(({ reminder }: any) => reminder);

  const navigateReminder = () => {
    dispatch({ type: SELECT_DAY, payload: numberDay });
    history.push(`/reminder`);
  };

  const edit = (reminder: any, index: number) => {
    dispatch({ type: EDIT_REMINDER, payload: { selected: reminder, index } });
  };

  const deleteReminder = (id: number) => {
    dispatch({ type: DELETE_REMINDER, payload: id });
  };

  const isWeekend = (): any => {
    const day = moment(`2020-12-${numberDay}`, 'YYYY-MM-DD');

    return WEEKEND_DAYS.includes(day.format('dddd')) ?
      { backgroundColor: 'lightgray', color: 'blue' } :
      { backgroundColor: 'white', color: 'black' };
  };

  return (
    <td
      style={{ height: '96px', width: '96px', border: '1px solid gray', verticalAlign: 'top', ...isWeekend() }}
      onClick={navigateReminder}
    >
      {numberDay}
      {reminders.filter(({ day }: any) => day == numberDay).map((reminder: any, index: number) =>
        <Reminder
          key={reminder.id}
          reminder={reminder}
          editCallback={edit}
          index={index}
          deleteCallback={deleteReminder}
        />
      )}
    </td>
  );
};
