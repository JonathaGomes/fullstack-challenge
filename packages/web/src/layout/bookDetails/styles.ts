import styled from "styled-components";

export const BookDetailsContainer = styled.div`
  width: 100%;
  background: #fffcf9;
  section {
    position: relative;
    height: 17.5rem;
    background-color: #fff6e5;
    border-radius: 0 0 100px 0;
    background-image: url("/oval-1.svg"), url("/oval-4.svg"), url("/oval-2.svg"),
      url("/oval-3.svg"), url("/oval-5.svg");
    background-repeat: no-repeat;
    background-position: 125% -20%, 74% 95%, 72% 28%, 22% 53%, 11% 47%;
  }
`;

export const BookDetailsContent = styled.div`
  width: 90%;
  margin: 4.2rem auto 0;

  h1 {
    color: #36383a;
    font-size: 1.5rem;
  }

  h2 {
    margin-top: 0.5rem;

    font-size: 1rem;
    color: var(--red);
    font-weight: 600;
  }

  p {
    margin-top: 0.5rem;
    font-family: "SFProText";
    font-size: rrem;
    color: #313131;
    line-height: 1.5;
    opacity: 0.5;
  }
`;

export const BookCover = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;

export const ArrowBack = styled.div`
  position: sticky;
  top: 3.5rem;
  margin-left: 2rem;
  img {
    height: 1.2rem;
    width: 1.2rem;
  }
`;

export const BookDetailsBar = styled.div`
  position: fixed;
  display: flex;
  left: 50%;
  transform: translateX(-50%);
  bottom: 3.5rem;
  align-items: center;
  justify-content: space-around;
  height: 3.5rem;
  width: 23rem;
  border-radius: 4px;
  margin: 0 auto;
  box-shadow: 6px 6px 23px rgba(107, 103, 70, 0.2);

  a {
    display: flex;
    align-items: center;
    height: 1rem;
    gap: 0.5rem;
    font-size: 1rem;
    font-weight: 700;

    & + a {
      padding-left: 1.625rem;
      border-left: 1px solid #979797;
    }
  }
`;
