import * as api from '../api';

//SYNCHRONOUS ACTION CREATORS
function createTaskSucceeded(task){
    return{
        type: 'CREATE_TASK_SUCCEEDED',
        payload:{
            task
        }
    }
}
function editTaskSucceeded(task){
    return{
        type: 'EDIT_TASK_SUCCEEDED',
        payload:{
            task,
        },
    };
}
function deleteTaskSucceeded(taskId){
    return{
        type: 'DELETE_TASK',
        payload:{
            id: taskId
        }
    }
}

function fetchTasksSucceeded(tasks){
    return{
        type: 'FETCH_TASKS_SUCCEEDED',
        payload: {
            tasks
        }
    }
}
function fetchTasksStarted(){
    return{
        type: "FETCH_TASKS_STARTED",
    };
}
function fetchTasksFailed(error){
    return{
        type:'FETCH_TASKS_FAILED',
        payload: {error,},
    };
}


//ASYNCHRONOUS ACTION CREATORS 
export function fetchTasks(){
    return dispatch =>{
        dispatch(fetchTasksStarted());
        
        api
            .fetchTasks()
            .then(resp=>{
                //throw new Error('Siet, not able to fetch tasks')})
                setTimeout(()=>{ dispatch(fetchTasksSucceeded(resp.data));},2000);})
            .catch(err=>{
                dispatch(fetchTasksFailed(err.message))
            })
    }

}

export function createTask({title, description, status = 'Unstarted'}){
    return dispatch =>{
        api.createTask({title, description, status}).then(resp =>{
            dispatch(createTaskSucceeded(resp.data));
        });
    };
}

function getTaskById(tasks, id){
    return tasks.find(task => task.id === id )
}
export function editTask(taskId, params={}){
    return (dispatch, getState) =>{
        //Get the task 
        const task = getTaskById(getState().tasks.tasks, taskId);
        //update the task with changed parameters
        const updatedTask = Object.assign({}, task, params);
        // send the changed task object to server then dispatch from server to state
        api.editTask(taskId, updatedTask).then(resp =>{
            dispatch(editTaskSucceeded(resp.data));
        })
    }
}
export function deleteTask(id){
    return dispatch =>{
        api.deleteTask(id).then(resp =>{
            if(resp.status === 200){
                dispatch(deleteTaskSucceeded(id))
            };
        });
    };
}