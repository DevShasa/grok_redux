import React, {Component} from 'react';
import TasksPage from './components/TasksPage';
import { connect } from 'react-redux';
import { 
  createTask, 
  editTask, 
  deleteTask,
  fetchTasks,
} from './redux/actions';
import FlashMessage from './components/FlashMessage';

class App extends Component{

  componentDidMount(){
    this.props.dispatch(fetchTasks())
  }

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
        {this.props.error && <FlashMessage message={this.props.error}/>}
        <TasksPage 
          tasks={this.props.tasks}
          onCreateTask = {this.onCreateTask}
          onStatusChange = {this.onStatusChange}
          onDelete = {this.onDelete}
          isLoading = {this.props.isLoading}
        />
      </div>
    )
  }
}

function mapStateToProps(state){
  const {tasks, isLoading, error} = state.tasks;
  return { tasks, isLoading, error };
}
export default connect(mapStateToProps)(App)