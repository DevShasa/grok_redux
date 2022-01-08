import React, { Component} from "react";
import Tasklist from './Tasklist';

const TASK_STATUSES = ['Unstarted', 'In Progress', 'Complete']
// Each task in the list is replaced with <Tasklist> containing all the tasks with that tag 
export default class TasksPage extends Component{
    renderTasksList(){
        const {tasks} = this.props;
        return TASK_STATUSES.map(status =>{
            // select all the tasks that match the status 
            const statusTasks = tasks.filter(task => task.status === status);
            return <Tasklist key={status} status={status} tasks={statusTasks}/>
            }
        )
    }

    render(){
        return(
            <div className="tasks">
                <div className="tasks-lists">
                    {this.renderTasksList()}
                </div>
            </div>
        );
    }
}
