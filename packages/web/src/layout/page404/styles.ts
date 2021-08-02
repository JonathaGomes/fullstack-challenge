import styled from "styled-components";

export const Page404Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 1rem;
  color: #264372;
  font-family: Roboto, sans-serif;

  h1 {
    font-size: 8rem;
  }

  h2 {
    font-size: 2rem;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 3rem;
    color: #fff;
    padding: 0 3rem;
    background-color: #264372;
    border-radius: 24px;
    text-transform: uppercase;
    font-weight: 500;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
