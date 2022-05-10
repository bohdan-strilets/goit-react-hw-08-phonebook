import styled from '@emotion/styled';

export const Wrapper = styled.div`
  border-bottom: 1px solid var(--second-bg-color);
  padding-bottom: 30px;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
