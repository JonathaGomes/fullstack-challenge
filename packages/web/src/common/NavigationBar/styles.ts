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
  position: sticky;
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
`;

export const NavLink = styled.a<NavLinkProps>`
  ${textCentered}
  gap: 0.325rem;
  transition: color 0.3s;

  color: ${({ isActive }) => (isActive ? "#313131" : "#bfbebf")};

  &:hover {
    color: #313131 !important;
  }
`;
