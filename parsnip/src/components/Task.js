import React from 'react';
const TASK_STATUSES = [
    "Unstarted",
    "In Progress",
    "Complete",
    "Delete"
]

const Task = (props)=>{
    return(
        <div className="task">
            <div className="task-header">
                <span className="header-text">
                    {props.task.title}
                </span>

                <select value = {props.task.status} onChange={onStatusChange}>
                    {TASK_STATUSES.map(status =>{
                        return(
                            <option key={status} value = {status}>
                                {status}
                            </option>
                        )
                    })}on
                </select>
            </div>
            <div className="task-body">
                {props.task.description}
            </div>
        </div>
    )
    
    function onStatusChange(e){
        if(e.target.value !== "Delete"){
            props.onStatusChange(props.task.id, e.target.value)
        }else{
            props.onDelete(props.task.id)
        }
    }

};
export default Task;