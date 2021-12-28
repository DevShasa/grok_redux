import { createStore } from 'redux'; //Getstate, Dispatch, Subscribe 
// dispatch({action_type, action_payload}) => reducer(state, action){if(action.type === TYPE){//load new state}} 
const initialState = {
    posts: [{id: 1, title: 'Test Post'}],
    signUpModal: {open: false}
}

const reducer = (state=initialState, action) => {
    if(action.type ==="ADD_POST"){
        // clone the initial state then override posts with the payload
        return Object.assign({}, state, {
            posts: state.posts.concat(action.payload)
        })
    }

    if(action.type ==="LOAD_POSTS"){
        return{
            // fetch whatever is in state
            ...state,
            // concatenate payload with the rest of posts data 
            posts: state.posts.concat(action.payload) 
        }
    }

    return state
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store
