import React from 'react';
const Task = (props)=>{
    return(
        <div className="task">
            <div className="task-header">
                <span className="header-text">
                    {props.task.title}
                </span>
            </div>
            <div className="task-body">
                {props.task.description}
            </div>
        </div>
    )
};
export default Task;