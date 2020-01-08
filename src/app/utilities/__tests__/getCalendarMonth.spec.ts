import getCalendarMonth from '../getCalendarMonth';

describe('getCalendarMonth', () => {
  it('should set ann array with all the day of the month', () => {
    expect(getCalendarMonth(2019, 11)[1]).toEqual([2, 3, 4, 5, 6, 7, 8]);
    expect(getCalendarMonth(2019, 10)[0]).toEqual([28, 29, 30, 31, 1, 2, 3]);
  });
});
