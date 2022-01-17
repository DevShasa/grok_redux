const initialState = {
    tasks: [],
    isLoading: false,
    error: null,
}

const tasksReducer = (state= initialState, action) =>{
    switch(action.type){
        case 'FETCH_TASKS_STARTED':
            return{
                ...state,
                isLoading: true,
            }
        case 'FETCH_TASKS_SUCCEEDED':
            return {
                ...state,
                isLoading: false,
                tasks: action.payload.tasks
            }
        case 'FETCH_TASKS_FAILED':
            return{
                ...state,
                isLoading: false,
                error: action.payload.error,
            }
        case 'EDIT_TASK_SUCCEEDED':
            const {payload} = action;
            const nextTasks = state.tasks.map(task=>{
                if(task.id === payload.task.id){
                    return payload.task
                }
                return task;
            })
            return {
                ...state,
                tasks: nextTasks
            }
        case 'DELETE_TASK':
            return{
                ...state,
                tasks: state.tasks.filter(task => task.id !== action.payload.id)
            }
        case 'CREATE_TASK_SUCCEEDED':
            return{
                ...state,
                tasks: state.tasks.concat(action.payload.task),
            }
        default:
            return state
    }
}

export default tasksReducer