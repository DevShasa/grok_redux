import * as api from '../api';

let _id = 1
export function uniqueId(){
    //The increment operator (++) increments (adds one to) its operand and returns a value.
    return _id++;
}


//SYNCHRONOUS ACTION CREATORS
export function createTask({title, description,}){
    return{
        type: 'CREATE_TASK',
        payload:{
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted'
        }
    }
}
export function editTask(taskId, params={}){
    return{
        type: 'EDIT_TASK',
        payload:{
            id: taskId,
            params,
        }
    }
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