import styled, { css } from "styled-components";

const textCentered = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ProfilePageContainer = styled.div`
  height: 100vh;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
`;

export const ProfilePageContent = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 2rem;

  div:first-child {
    ${textCentered};
    height: 2.5rem;
    width: 2.5rem;
    background: ${({ theme }) => theme.colors.backgroundArrow};
    border-radius: 8px;
  }

  h1 {
    color: ${({ theme }) => theme.colors.label};
  }
`;

export const Profile = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  margin-top: 3rem;
  color: ${({ theme }) => theme.colors.label};

  img {
    border-radius: 50%;
  }
`;

export const Pencil = styled.div`
  ${textCentered}
  position: absolute;
  top: 0;
  left: 3.5rem;
  height: 1.8rem;
  width: 1.8rem;

  border-radius: 50%;
  background: #fff;
  border: 1.5px solid ${({ theme }) => theme.colors.backgroundArrow};
`;
export const UserData = styled.div`
  margin-top: 2rem;

  background: ${({ theme }) => theme.colors.backgroundArrow};
  border-radius: 8px;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    & + div {
      margin-top: 2rem;
    }
    div {
      display: flex;
      flex-direction: column;
    }
  }

  button {
    border-radius: 4px;
    background: #414052;
    padding: 0 1rem;
    height: 2rem;
    color: ${({ theme }) => theme.colors.backgroundBookDetails};

    font-weight: bold;
  }

  input {
    background: transparent;
    border: none;
    outline: 0;
    user-select: none;
    color: ${({ theme }) => theme.colors.label};
  }

  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.backgroundBookDetails};
  }

  p {
    color: ${({ theme }) => theme.colors.label};
    margin-top: 0.5rem;
  }
`;

export const Settings = styled.div`
  margin-top: 2rem;

  background: ${({ theme }) => theme.colors.backgroundArrow};
  border-radius: 8px;
  padding: 1rem;

  div {
    display: flex;
    justify-content: space-between;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
  }
  h2 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.colors.backgroundBookDetails};
  }

  p {
    color: ${({ theme }) => theme.colors.backgroundBookDetails};
    margin-top: 0.5rem;
  }
`;

export const ButtonSignOut = styled.button`
  margin-top: 2rem;
  border-radius: 8px;
  font-size: 1.2rem;
  color: #fff;
  height: 3rem;
  background: ${({ theme }) => theme.colors.backgroundButton};
  width: 100%;
`;
