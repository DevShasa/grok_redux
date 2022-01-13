import React, {Component} from 'react';
import TasksPage from './components/TasksPage';
import { connect } from 'react-redux';
import { createTask, editTask, deleteTask } from './redux/actions';


class App extends Component{

  onCreateTask = ({title, description}) => {
    this.props.dispatch(createTask({title, description}));
  }

  onStatusChange = (taskId, status)=>{
    this.props.dispatch(editTask(taskId, {status}))
  }

  onDelete = (taskId)=>{
    this.props.dispatch(deleteTask(taskId)) //dispatch delete here
  }
  render(){
    return(
      <div className="main-content">
        <TasksPage 
          tasks={this.props.tasks}
          onCreateTask = {this.onCreateTask}
          onStatusChange = {this.onStatusChange}
          onDelete = {this.onDelete}
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