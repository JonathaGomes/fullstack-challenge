import styled from "styled-components";

export const LoadingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.colorTitle};
  background: ${({ theme }) => theme.colors.background};
  gap: 1.5rem;
`;
