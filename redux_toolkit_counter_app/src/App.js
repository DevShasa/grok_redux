import Counter from "./components/Counter";
import styled from "styled-components";

function App() {
  return (
    <Container className="App">
      <Counter />
    </Container>
  );
}

export default App;

const Container = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`