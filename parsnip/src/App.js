import React, {Component} from 'react';
import TasksPage from './components/TasksPage';

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
      title: 'Grok react',
      description: 'We must omoks with this react think my guy',
      status: 'Unstarted',
    }
];

class App extends Component{
  render(){
    return(
      <div className="main-content">
        <TasksPage tasks={mockTasks}/>
      </div>
    )
  }
}
export default App