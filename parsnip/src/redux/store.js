import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tasks from './reducer';

const store = createStore(
    tasks,
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store