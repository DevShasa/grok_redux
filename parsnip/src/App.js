import React, {Component} from 'react';
import TasksPage from './components/TasksPage';
import { connect } from 'react-redux';
import { createTask } from './redux/actions';


class App extends Component{

  onCreateTask = ({title, description}) => {
    this.props.dispatch(createTask({title, description}));
  }

  render(){
    console.log('props from app:', this.props)
    return(
      <div className="main-content">
        <TasksPage 
          tasks={this.props.tasks}
          onCreateTask = {this.onCreateTask}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  return {
    tasks: state.tasks
  }
}
export default connect(mapStateToProps)(App)