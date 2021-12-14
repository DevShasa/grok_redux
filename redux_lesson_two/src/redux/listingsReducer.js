// the redducer, (state, action)
import listingsService from '../services/listingsService';

// the actual reducer function, which accepts state and action 
const listingsReducer = (state = [], action) =>{
    switch(action.type){
        case 'INIT_LISTINGS':
            return action.data;
        default:
            return state;
    }
}

// function that fetches data and creates a dispatch which activates the reducer
export const initListings = () =>{
    return async dispatch =>{
        const listings = await listingsService.getAll();
        dispatch({
            type: 'INIT_LISTINGS',
            data: listings, 
        })
    }
}

export default listingsReducer;