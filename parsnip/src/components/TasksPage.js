import React, { Component} from "react";
import Tasklist from './Tasklist';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Complete']
// Each task in the list is replaced with <Tasklist> containing all the tasks with that tag 
export default class TasksPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            showNewCardForm: false,
            title: '',
            description: ''
        };
    }

    onTitleChange = (e)=>{
        this.setState({title: e.target.value})
    }
    
    onDescriptionChange = (e) =>{
        this.setState({description: e.target.value})
    }

    resetForm(){
        this.setState({
            showNewCardForm: false,
            title: '',
            description: '',
        });
    }
    
    onCreateTask = (e) =>{
        e.preventDefault();
        //This will submit the form by passing the data to the function in props
        // the props maybe has a dispatch function or something  
        this.props.onCreateTask({
            title: this.state.title,
            description: this.state.description,
        });
        this.resetForm();
    }

    toggleForm = ()=>{
        this.setState({
            showNewCardForm: !this.state.showNewCardForm
        });
    }

    renderTasksList(){
        const {tasks} = this.props;
        return TASK_STATUSES.map(status =>{
            // select all the tasks that match the status 
            const statusTasks = tasks.filter(task => task.status === status);
            return( 
                <Tasklist 
                    key={status} 
                    status={status} 
                    tasks={statusTasks}
                    onStatusChange = {this.props.onStatusChange}
                />
                );
            }
        )
    }

    render(){
        return(
            <div className="tasks">
                <div className="task-list-header">
                    <button
                        className="btn"
                        onClick = {this.toggleForm}
                    >
                        + New Task
                    </button>
                </div>
                {this.state.showNewCardForm && (
                    <form onSubmit = {this.onCreateTask}>
                        <input
                            className="full-width-input"
                            onChange = {this.onTitleChange}
                            value={this.state.title}
                            type="text"
                            placeholder="Title"
                        />
                        <input 
                            className="full-width-input"
                            onChange={this.onDescriptionChange}
                            value={this.state.description}
                            type="text"
                            placeholder="Description"
                        />
                        <button type="submit" className="submit-button">
                            Save
                        </button>
                    </form>
                )}
                <div className="tasks-lists">
                    {this.renderTasksList()}
                </div>
            </div>
        );
    }
}