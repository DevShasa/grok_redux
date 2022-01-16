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
export function editTaskSucceeded(task){
    return{
        type: 'EDIT_TASK_SUCCEEDED',
        payload:{
            task,
        },
    };
}
export function deleteTask(taskId){
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

//ASYNCHRONOUS ACTION CREATORS 
export function fetchTasks(){
    return dispatch =>{
        api.fetchTasks().then(resp=>{
            dispatch(fetchTasksSucceeded(resp.data));
        });
    };
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
        console.log(getState().tasks)
        const task = getTaskById(getState().tasks, taskId);
        const updatedTask = Object.assign({}, task, params);

        api.editTask(taskId, updatedTask).then(resp =>{
            dispatch(editTaskSucceeded(resp.data));
        })
    }
}