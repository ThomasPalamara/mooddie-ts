import { makeStyles } from '@material-ui/core';

export const useCalendarStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  table: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
  },
  tr: { width: '9ch' },
  td: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '2rem',
    marginTop: '-1px',
    marginLeft: '-1px',
    border: theme.palette.grey[600],
  },
}));

export const DayStyle = makeStyles(theme => ({}));
