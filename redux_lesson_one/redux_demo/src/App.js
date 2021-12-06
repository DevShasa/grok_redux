import React, { Component } from 'react';
import { connect } from 'react-redux';


class App extends Component {
  constructor(){
    super()
    this.state = {
      value: '',
      postID: 2
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json=>{
        this.props.dispatch({
          type: 'LOAD_POSTS',
          payload: json
        })
      })
  }

  handleChange = (event) => {
    // This function is triggered every-time text is input in input-box
    this.setState({value: event.target.value})
  }

  handleSubmit = (event)=>{
    event.preventDefault()
    this.props.dispatch({
      type: 'ADD_POST',
      payload: {id: this.state.postID, title:this.state.value}
    })
    this.setState({postID: this.state.postID+1})
  }
  render(){
    return(
      <div className="App">
        <header className="App-header">
          <form onSubmit = {this.handleSubmit}>
            <input 
              type="text"
              value={this.state.value}
              onChange = {this.handleChange}
            />
            <div>
              <button type="submit" onClick={this.handleSubmit}>Submit</button>
            </div>
          </form>
          <ul>
            {this.props.posts.map(post=>(<li key={post.id} >{post.title}</li>))}
          </ul>
        </header>
      </div>
    )
  }
}


function mapStateToProps(state){
  // determines what props from our store we want to pull into our component
  // We are specifying only pull from the state's posts property
  // posts will be made available to App by Provider as a prop 
  return {posts: state.posts}
}
function mapDispatchToProps(dispatch){
  // dispatch is also made available to App by Provider as a prop 
  // example this.state.dispatch()
  return {dispatch}
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)