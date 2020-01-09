import { startOfISOWeek, getDate, addDays } from 'date-fns';

export default (year: number, month: number) => {
  let dayToAdd = startOfISOWeek(new Date(year, month));
  const result: Array<Array<Date>> = [];
  for (let week = 0; week < 6; week++) {
    result[week] = [];
    for (let day = 0; day < 7; day++) {
      result[week].push(dayToAdd);
      dayToAdd = addDays(dayToAdd, 1);
    }
  }
  return result;
};
