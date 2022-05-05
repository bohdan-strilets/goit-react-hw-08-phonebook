import styled from '@emotion/styled';
import { FaUser } from 'react-icons/fa';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px;

  background-color: #fafafa;
  border-radius: 10px;
  border: 1px solid #f2f2f2;
`;

export const NameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const IconUser = styled(FaUser)`
  background-color: var(--accent-bg-color);
  color: var(--main-bg-color);

  margin-right: 30px;
  padding: 10px;
`;

export const Name = styled.p`
  font-size: 18px;
  color: var(--main-text-color);
`;

export const NumberWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Number = styled.p`
  margin-right: 30px;
`;

export const ButtonList = styled.ul`
  display: flex;
  align-items: center;
`;

export const ButtonItem = styled.li`
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 40px;
  height: 30px;
  padding: 10px;

  border: none;
  background-color: transparent;
  color: var(--accent-bg-color);

  cursor: pointer;
  transition: color var(--main-hover-animation);

  :hover,
  :focus {
    color: var(--second-bg-color);
  }
`;
