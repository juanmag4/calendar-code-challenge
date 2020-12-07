import React from 'react';
import moment from 'moment';

export const Header = () => {
  return (
    <thead>
      <tr style={{ backgroundColor: 'lightblue', color: 'white' }}>
        {moment.weekdays().map((day: any) =>
          <th key={day}>
            {day}
          </th>
        )}
      </tr>
    </thead>
  )
};
