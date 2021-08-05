import PuffLoader from "react-spinners/PuffLoader";

import { LoadingContainer } from "./styles";

export function Loading() {
  return (
    <LoadingContainer>
      <h1>Book App</h1>
      <PuffLoader size="80px" color="#FF6978" />
    </LoadingContainer>
  );
}
