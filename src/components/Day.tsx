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

  const edit = (reminder: any) => {
    dispatch({ type: EDIT_REMINDER, payload: { selected: reminder } });
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

  const sortPerTime = (a: any, b: any) => {
    const aTime = moment(a.time, 'HHmm');
    const bTime = moment(b.time, 'HHmm');

    if (aTime.isAfter(bTime)) {
      return 1;
    }
    if (aTime.isBefore(bTime)) {
      return -1;
    }

    return 0;
  };

  return (
    <td
      style={{ height: '96px', width: '96px', border: '1px solid gray', verticalAlign: 'top', ...isWeekend(), pointerEvents: !numberDay ? 'none' : undefined }}
      onClick={navigateReminder}
    >
      {numberDay}
      <div style={{ height: '68px', overflow: 'auto' }}>
        {reminders.filter(({ day }: any) => day == numberDay).sort(sortPerTime).map((reminder: any) =>
          <Reminder
            key={reminder.id}
            reminder={reminder}
            editCallback={edit}
            deleteCallback={deleteReminder}
          />
        )}
      </div>
    </td>
  );
};
