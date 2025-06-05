import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading type="h1">The Wild Oasis</Heading>

        <Heading type="h2">Check in/out</Heading>
        <Button onClick={() => alert("Check in clicked")}>Check in</Button>
        <Button onClick={() => alert("Check out clicked")}>Check out</Button>

        <Heading type="h3">Form</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
