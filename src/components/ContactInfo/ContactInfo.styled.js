import styled from '@emotion/styled';

export const Wrapper = styled.div``;

export const GoBack = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 100px;
  height: 30px;
  padding: 10px;
  margin-bottom: 30px;

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

export const ImageWrapper = styled.div`
  height: 100%;
  overflow: hidden;

  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media screen and (min-width: 768px) {
    height: 300px;
  }

  @media screen and (min-width: 1440px) {
    height: 500px;
  }
`;

export const Photo = styled.img`
  width: 100%;
`;

export const PersonalData = styled.div`
  margin-bottom: 30px;
`;

export const Name = styled.h2`
  font-weight: 700;
  font-size: 25px;
  text-align: center;

  color: var(--accent-text-color);

  padding: 15px;
  margin-bottom: 15px;
`;

export const Label = styled.span`
  color: var(--accent-text-color);
  margin-right: 5px;
`;

export const Phone = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Email = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const LocalData = styled.div`
  margin-bottom: 30px;
`;

export const City = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Company = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 49%;
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
