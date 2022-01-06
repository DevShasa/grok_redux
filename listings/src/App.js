import React, {useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// useEffect is like componentDidMount 
// useSelector enables us to select data from redux store 
// useDispatch enables us to fire off redux actions(actionType, Payload)
import {initListings, deleteListing } from './redux/listingsReducer'
import SubmitListing from './components/submitlisting';

function App() {
  const dispatch = useDispatch();
  const listings = useSelector((state)=>state.listings);

  useEffect(()=>{
    dispatch(initListings());
  },[dispatch]);

  const removeListing = (listingname)=>{
    dispatch(deleteListing(listingname))
  }

  return (
    <div className="App">
      {listings.map((listing)=>(
        <div key={listing.name} className="listing">
          <span>{listing.name}</span>
          <span>{listing.age}</span>
          <span className = "delete" onClick={()=>removeListing(listing.name)}>X</span>
        </div> 
      ))}

      <SubmitListing />
    </div>
  );
}

export default App;
