//Reducer function
import listingsService from '../services/listingsService';

const listingsReducer = (state =[], action) =>{
    switch(action.type){
        case 'INIT_LISTINGS':
            return action.data;
        case 'ADD_LISTING':
            return[...state, action.data]
        case 'DELETE_LISTING':
            return state.filter(listing => listing.name !== action.data)
        default:
            return state;
    }
}; 

export const initListings = () =>{
    return async dispatch =>{
        const listings = await listingsService.getAll(); //Get the listings
        dispatch({
            type: 'INIT_LISTINGS',
            data: listings,
        });
    };
}

export const addListing = (name, age)=>{
    return async dispatch =>{
        const listing = await listingsService.addListing(name, age);
        dispatch({
            type: 'ADD_LISTING',
            data: listing,
        });
    };
};

export const deleteListing = (listingname) =>{
    return async dispatch =>{
        // call delete from database code here 
        dispatch({
            type: 'DELETE_LISTING',
            data: listingname,
        });
    };
}

export default listingsReducer;