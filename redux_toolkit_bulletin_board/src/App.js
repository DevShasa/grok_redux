import PostsList from "./pages/PostsList";
import AddPost from "./pages/AddPost";
import { Routes, Route } from "react-router-dom";
import Layout from "./container/Layout";
import SinglePagePost from "./pages/SinglePagePost";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Layout />} >
              <Route index element = {<PostsList />} />
              <Route path = "post">
                  <Route index element ={<AddPost/>}/>
                  <Route path=":postId" element={<SinglePagePost/>}/>
              </Route>
          </Route>
      </Routes>
  );
}

export default App;

