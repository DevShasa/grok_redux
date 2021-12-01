import React from 'react';
import { connect } from 'react-redux';


function App({ posts }) {
  return (
    <div className="App">
      <ul>
        {posts.map(post =>
          <li key={post.id}>{post.title}</li>
        )}
      </ul>
    </div>
  );
}

function mapStateToProps(state){
  // determines what props from our store we want to pull into our component
  // We are specifluing only pull from the state's posts property
  return {posts: state.posts}
} 

export default connect(mapStateToProps)(App)