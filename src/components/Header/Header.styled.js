import styled from '@emotion/styled';

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;

  color: var(--main-text-color);

  padding-top: 20px;
  padding-bottom: 20px;
`;

export const TitleColor = styled.span`
  color: var(--accent-text-color);
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 40px;
  margin-bottom: 50px;

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

export const ButtonText = styled.span`
  margin-right: 10px;
`;
