import styled from '@emotion/styled';
import { BsBookHalf } from 'react-icons/bs';

export const Wrapper = styled.footer`
  text-align: center;
  padding-top: 30px;
  border-top: 1px solid var(--second-bg-color);
`;

export const IconBook = styled(BsBookHalf)`
  color: var(--accent-bg-color);

  width: 50px;
  height: 50px;

  margin-bottom: 10px;
`;

export const Copyright = styled.footer`
  font-size: 14px;
`;
