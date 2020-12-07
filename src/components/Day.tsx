import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Reminder } from './Reminder';
import { EDIT_REMINDER } from '../actions/types';

export const Day = ({ numberDay }: any) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const { reminders } = useSelector(({ reminder }: any) => reminder);

  const navigateReminder = () => {
    history.push(`/reminder`);
  };

  const edit = (reminder: any, index: number) => {
    dispatch({ type: EDIT_REMINDER, payload: { selected: reminder, index } });
  };

  return (
    <td
      style={{ height: '96px', width: '96px', border: '1px solid gray', verticalAlign: 'top' }}
      onClick={navigateReminder}
    >
      {numberDay}
      {reminders.filter(({ day }: any) => day == numberDay).map((reminder: any, index: number) =>
        <Reminder reminder={reminder} callback={edit} index={index} />
      )}
    </td>
  );
};
