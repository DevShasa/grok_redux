import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { initListings } from './redux/listingsReducer';

function App() {

  const dispatch = useDispatch();
  
  useEffect(() =>{
    dispatch(initListings());
  }, [dispatch]);

  return (
    <div className="App">
      Hello there 
    </div>
  );
}

export default App;
