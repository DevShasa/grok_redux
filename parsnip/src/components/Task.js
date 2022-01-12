import React from 'react';
const TASK_STATUSES = [
    "Unstarted",
    "In Progress",
    "Complete"
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
                        let selected = false 
                        if(status === props.task.status){
                            selected = true
                        }
                        return(
                            <option 
                                key={status} 
                                value = {status}
                                {...selected} 
                            >
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
        // console.log(props.task.id, e.target.value)
        props.onStatusChange(props.task.id, e.target.value)
    }

};
export default Task;