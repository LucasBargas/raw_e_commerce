import styled from "styled-components";

export const AboutUsContainer = styled.section`
  padding: 3rem 0;
`;

export const AboutUsArea = styled.div`
  display: flex;
  background: ${({ theme }) => theme.colors.primaryColor};
  color: ${({ theme }) => theme.colors.lightColor};
`;

export const AboutUsText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 4.5rem 2.5rem;
  flex: 1;

  @media (max-width: 1024px)  {
    justify-content: center;
    padding: 2rem 2.5rem;
  }

  @media (max-width: 1000px) {
    padding: 3rem;
    height: 60vh;
  }

  @media (max-width: 600px) {
    padding: 3rem 1.5rem;
    height: auto;
  }

  @media (max-width: 320px) {
    padding: 3rem 1rem;
  }

  p {
    line-height: 1.75rem;

    &:not(:last-of-type) {
      margin-bottom: 2rem;
    }
  }
`;

export const AboutUsFig = styled.figure`
  flex: 1;

  @media (max-width: 1000px) {
    display: none;
  }

  span {
    width: 100% !important;
    height: 100% !important;
  }
`;