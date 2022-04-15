import styled from '@emotion/styled';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Icon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  background-color: var(--accent-bg-color);
  color: var(--second-text-color);

  margin-right: 5px;
  padding: 15px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 30px;
  }
`;

export const Number = styled.p`
  font-weight: 700;
  margin-right: 5px;

  @media screen and (min-width: 768px) {
    margin-right: 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 30px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 30px;
  height: 30px;
  padding: 10px;

  border: none;
  background-color: #2b2b2b;
  color: var(--second-text-color);

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--accent-bg-color);
  }
`;
