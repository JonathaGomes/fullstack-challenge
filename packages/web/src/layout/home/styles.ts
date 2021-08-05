import styled, { css } from "styled-components";

export const HomePageContainer = styled.div`
  height: calc(100vh + 3.75rem);

  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const HomePageContent = styled.div`
  width: 90%;
  margin: 0 auto;

  ${({ theme }) => css`
    h1 {
      margin-top: 1.875rem;
      font-size: 1.5rem;
      color: ${theme.colors.colorTitle};

      span {
        color: ${theme.colors.textSecondary};
      }
    }
  `};
`;

export const SearchInput = styled.form`
  position: relative;
  padding-top: 3.125rem;

  ${({ theme }) => css`
    input {
      height: 3rem;
      width: 100%;
      border: none;
      border-radius: 10px;
      box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.1);
      outline: 0;
      padding-left: 1rem;
      font-size: 1.2rem;
      margin-top: 0.625rem;
      background: ${theme.colors.backgroundInput};
      border: 1.5px solid ${theme.colors.backgroundInput};
      padding-left: 2.8rem;

      &:focus {
        border: 1.5px solid ${theme.colors.colorTitle};
      }

      &::placeholder {
        color: ${theme.colors.placeholder};
        font-size: 1rem;
      }
    }
  `};

  div {
    position: absolute;
    bottom: 0.5rem;
    left: 0.5rem;
    height: 1rem;
    width: 1rem;
  }
`;

export const BookContainer = styled.div`
  margin-top: 2.25rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  color: ${({ theme }) => theme.colors.textSecondary};

  img {
    width: 6.5rem;
    height: 9.5rem;
    border-radius: 5px;
  }

  h2 {
    font-size: 0.9rem;
    font-weight: 700;
    overflow: hidden;

    text-overflow: clip ellipsis;
  }

  p {
    margin-top: 0.5rem;
    font-family: "Roboto";
    font-weight: 900;
    font-size: 0.75rem;
  }

  div:last-child {
    margin-bottom: 6rem;
  }
`;
