import React from 'react';

export const Reminder = ({ reminder, editCallback, index, deleteCallback }: any) => {
  const { time, color, id } = reminder;

  return (
    <div
      style={{ backgroundColor: color, color: 'white', display: 'flex', justifyContent: 'space-between' }}
      onClick={() => { editCallback(reminder, index) }}
    >
      <div className="d-flex" style={{ alignItems: 'center' }}>
        <span>{time}</span>
        <span>{reminder.reminder}</span>
      </div>
      <button className="btn btn-secondary" onClick={(event) => { event.stopPropagation(); deleteCallback(id) }}>
        x
      </button>
    </div>
  );
};
