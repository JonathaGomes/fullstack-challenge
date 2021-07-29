import styled, { css } from "styled-components";

const textCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationBarContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
`;

export const NavigationBarContent = styled.nav`
  width: 90%;
  height: 3.75rem;

  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    ${textCentered}
    flex-direction: column;
    gap: 0.325rem;
  }

  a {
    ${textCentered}
    gap: 0.325rem;
    transition: color 0.3s;

    &:hover {
      color: #313131 !important;
    }
  }
`;
