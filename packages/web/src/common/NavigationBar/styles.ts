import styled, { css } from "styled-components";

type NavLinkProps = {
  isActive: boolean;
};

const textCentered = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NavigationBarContainer = styled.div`
  position: fixed;
  bottom: 0;
  /*top: 0;*/
  width: 100%;
  height: 3.75rem;
  background-color: #fff;
`;

export const NavigationBarContent = styled.nav`
  width: 90%;
  height: 3.75rem;

  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  align-items: center;

  div {
    ${textCentered}
    flex-direction: column;
    gap: 0.325rem;
  }
`;

export const NavLink = styled.a<NavLinkProps>`
  ${textCentered}
  gap: 0.325rem;
  transition: color 0.3s;
  font-size: 0.75rem;

  color: ${({ isActive }) => (isActive ? "#313131" : "#bfbebf")};

  &:hover {
    color: #313131 !important;
  }
`;
