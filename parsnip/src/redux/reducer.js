const mockTasks = [
    {
    id: 1,
    title: 'Learn Redux',
    description: 'The store, actions, and reducers, oh my!',
    status: 'In Progress',
    },
    {
    id: 2,
    title: 'Fetch Groceries',
    description: 'Fetch groceries from the shop',
    status: 'In Progress',
    },
    {
    id: 3,
    title: 'Grok react',
    description: 'We must omoks with this react think my guy',
    status: 'Complete',
    },
    {
    id: 4,
    title: 'Take time to rest',
    description: 'Work and no play makes jack Dull',
    status: 'Unstarted',
    }
];

export default function tasks(state= {tasks: mockTasks}, action){
    return state
}