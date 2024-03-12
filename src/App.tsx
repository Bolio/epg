import { HomePage } from "./Pages/Home";
import "./App.css";

import styled from "styled-components";

const StyledMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: white;
  overflow-x: hidden;
`;

function App() {
  return (
    <StyledMainContainer>
      <HomePage />
    </StyledMainContainer>
  );
}

export default App;
