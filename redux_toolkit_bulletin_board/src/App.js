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
  height: 100vh;
  background-color: #EDF2F7;
  padding: 1rem;
`