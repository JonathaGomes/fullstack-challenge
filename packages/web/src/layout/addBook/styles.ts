import styled, { css } from "styled-components";

export const AddBookContainer = styled.main`
  height: calc(100vh - 3.75rem);
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const AddBookContent = styled.div`
  width: 90%;
  margin: 0 auto;

  ${({ theme }) => css`
    h1 {
      color: ${theme.colors.colorTitle};
      font-size: 1.5rem;
      font-weight: 600;
      padding-top: 3.3125rem;
    }

    div {
      &:first-child {
        margin-top: 3.5625rem;
      }
      margin-top: 2.375rem;
    }

    label {
      font-size: 1rem;
      color: ${theme.colors.label};
      font-weight: bold;
    }

    input,
    textarea {
      width: 100%;
      border: none;
      border-radius: 10px;
      ${({ theme }) =>
        theme.title === "light" &&
        css`
          box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.5);
        `};
      outline: 0;
      padding-left: 1rem;
      font-size: 1.2rem;
      margin-top: 0.625rem;

      &:focus {
        border: 1.5px solid ${theme.colors.colorTitle};
      }

      &::placeholder {
        color: ${theme.colors.placeholder};
        font-size: 1rem;
      }
    }

    input {
      height: 3rem;
    }

    textarea {
      padding-top: 1rem;
      resize: vertical;
      height: 14.25rem;
    }

    button {
      height: 3rem;
      width: 100%;
      background: ${theme.colors.colorTitle};
      border-radius: 10px;

      margin: 2.375rem 0;

      font-size: 1.5rem;
      font-weight: 600;
      color: ${theme.colors.colorTextButton};
      transition: filter 0.3s;

      ${({ theme }) =>
        theme.title === "light" &&
        css`
          box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.5);
        `};
      &:hover {
        filter: brightness(0.8);
      }
    }
  `};
`;

export const MessageError = styled.p`
  margin-top: 0.5rem;
  color: ${({ theme }) => theme.colors.colorTitle};
  font-weight: bold;
`;
