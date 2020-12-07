import React from 'react';

export const Reminder = ({ reminder, editCallback, deleteCallback }: any) => {
  const { time, color, id } = reminder;

  return (
    <div
      style={{ backgroundColor: color, color: 'white', display: 'flex', justifyContent: 'space-between', marginBottom: '2px' }}
      onClick={() => { editCallback(reminder) }}
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
