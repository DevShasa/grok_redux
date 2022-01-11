import { uniqueId } from "./actions";
const mockTasks = [
    {
    id: uniqueId(), 
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
    },
    {
    id: uniqueId(), 
    title: 'Fetch Groceries',
    description: 'Fetch groceries from the shop',
    status: 'In Progress',
    },
    {
    id: uniqueId(),
    title: 'Grok react',
    description: 'We must omoks with this react think my guy',
    status: 'Complete',
    },
    {
    id: uniqueId(),
    title: 'Take time to rest',
    description: 'Work and no play makes jack Dull',
    status: 'Unstarted',
    }
];

export default function tasks(state= {tasks: mockTasks}, action){
    switch(action.type){
        case 'CREATE_TASK':
            return {tasks: state.tasks.concat(action.payload)}
        default:
            return state
    }
}