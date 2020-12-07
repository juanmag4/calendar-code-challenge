import moment from 'moment';

export const getFirstDayOfMonth = (): any => {
  let momentObject = moment();
  return moment(momentObject).startOf("month").format("d");
};

export const sortDays = (days: any) => {
  let rows: any = [];
  let cells: any[] = [];
  
  days.forEach((day: any, index: number) => {
    if (index % 7 !== 0) {
      cells.push(day);
    } else {
      rows.push(cells);
      cells = [];
      cells.push(day);
    }
    if (index === days.length - 1) {
      rows.push(cells);
    }
  });

  return rows;
};

export const getDays = () => {
  let days: any = Array.from(Array(32).keys());
  days.shift();
  return days;
};
