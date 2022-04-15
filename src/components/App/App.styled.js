import styled from '@emotion/styled';

export const Container = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 0 10px 100px 10px;

  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1440px) {
    width: 1440px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;

  color: var(--main-text-color);

  padding-top: 100px;
  padding-bottom: 100px;
`;

export const TitleColor = styled.span`
  color: var(--accent-text-color);
`;

export const Subtitle = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: var(--main-text-color);

  margin-bottom: 30px;
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
