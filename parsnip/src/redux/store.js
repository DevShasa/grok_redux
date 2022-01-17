import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import tasksReducer from './reducers/tasksReducer';

const reducer = combineReducers({
    tasks:tasksReducer,
})

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
    );
export default store