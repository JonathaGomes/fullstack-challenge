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
  background-color: #030005;

  h1 {
    font-size: 12rem;
    font-family: montserrat, sans-serif;
    font-weight: 900;
    color: #030005;
    text-transform: uppercase;
    text-shadow: -1px -1px 0 #8400ff, 1px 1px 0 #ff005a;
    letter-spacing: -20px;
  }

  h2 {
    position: absolute;
    top: 400px;
    font-family: montserrat, sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: #fff;
    text-shadow: 0 2px 0 #8400ff;
    letter-spacing: 13px;
    margin: 0;
  }

  a {
    font-family: montserrat, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    height: 3rem;
    color: #ff005a;
    border: 2px solid;
    padding: 0 3rem;
    background-color: transparent;
    font-size: 0.875rem;
    text-transform: uppercase;
    transition: filter 0.3s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
