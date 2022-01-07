import React from 'react';
const Task = (props)=>{
    return(
        <div className="task">
            <div className="task-header">
                <h4>{props.task.title}</h4>
            </div>
            <div className="task-body">
                {props.task.description}
            </div>
        </div>
    )
};
export default Task;