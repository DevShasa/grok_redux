//In this action creator file is where side effects are handled 
let _id = 1;
export function uniqueId(){
    //The increment operator (++) increments (adds one to) its operand and returns a value.
    return _id++;
}

//our action
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
