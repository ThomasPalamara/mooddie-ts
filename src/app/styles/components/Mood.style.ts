import styled from '@emotion/styled';
import theme from '../theme';

export const Status = styled.div({
  color: theme.palette.success.main,
  span: {
    display: 'flex',
  },
});

export const BtnWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
`;
