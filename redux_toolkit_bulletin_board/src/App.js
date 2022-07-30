import PostsList from "./components/PostsList";
import styled from "styled-components";
import AddPost from "./components/AddPost";

function App() {
  return (
    <ContainerDiv className="App">
      <AddPost />
      <PostsList />
    </ContainerDiv>
  );
}

export default App;

const ContainerDiv = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  height: 100vh;
`