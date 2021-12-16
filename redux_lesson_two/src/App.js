import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initListings } from './redux/listingsReducer';

function App() {

  // update the store
  const dispatch = useDispatch();
  useEffect(() =>{ dispatch(initListings()); }, [dispatch]);

  // get data from state
  const listings = useSelector((state) => {return state.listings})

  return (
    <div className="App">
      {listings.map((listing)=>
        <div className="Listing" key={listing.name}>
            <span>{listing.name}</span> <span>{listing.age}</span>
        </div>
      )}
    </div>
  );
}

export default App;
