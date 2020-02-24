import styled from '@emotion/styled';
import theme, { mq } from '../theme';

const fz = theme.fontSize;

export const Table = styled.table({
  width: '100%',
  justifyContent: 'center',
  ...mq({ fontSize: [, , fz.sm, fz.md, fz.lg] }),
});

export const TRow = styled.tr`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
`;

export const TData = styled.td`
  width: ${100 / 7}%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${theme.colors.gray[200]};
  height: 2rem;
  margin-top: -1px;
  margin-left: -1px;
`;
