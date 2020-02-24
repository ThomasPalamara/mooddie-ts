import styled from '@emotion/styled';
import theme from '../theme';

export const Table = styled.table`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  width: 100%;
  justify-content: center;
`;
export const TRow = styled.tr`
  width: 9ch;
`;
export const TData = styled.td`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.gray[200]};
  height: 2rem;
  margin-top: -1px;
  margin-left: -1px;
`;

export const Day = styled.button<{ dayState: T.Mood }>(props => ({
  height: '100%',
  width: '100%',
  cursor: 'pointer',
  backgroundColor: props.dayState && theme.colors[props.dayState],
}));
