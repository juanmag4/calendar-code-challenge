import React from 'react';

export const Reminder = ({ reminder, callback, index }: any) => {
  const { time, color } = reminder;

  return (
    <div style={{ backgroundColor: color, color: 'white' }} onClick={() => { callback(reminder, index) }}>
      <span>{time}</span>
      <span>{reminder.reminder}</span>
    </div>
  );
};
