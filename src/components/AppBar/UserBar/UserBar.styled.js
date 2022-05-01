import styled from '@emotion/styled';
import { BiUser } from 'react-icons/bi';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const UserIcon = styled(BiUser)`
  background-color: var(--accent-text-color);
  color: var(--second-text-color);
  padding: 10px;
  border-radius: 50%;
`;

export const Text = styled.p`
  margin-left: 15px;
  margin-right: 15px;
  font-weight: 700;
`;

export const UserName = styled.span`
  color: var(--accent-text-color);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 35px;
  padding: 0 20px 0 20px;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);
  font-family: inherit;
  border: none;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--second-bg-color);
  }
`;
