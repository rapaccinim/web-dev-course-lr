import React, {useState, useEffect} from 'react';
import BarLoader from "react-spinners/ClipLoader";
import CustomHeader from './Components/CustomHeader/CustomHeader.js';
import CustomBody from './Components/CustomBody/CustomBody.js';
import CustomFooter from './Components/CustomFooter/CustomFooter.js';
import './App.css';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {
        loading ?

        <div className='App'>
          <BarLoader color={'blue'} loading={loading} size={80} />
        </div>

        :

        <div>
          <CustomHeader />
          <CustomBody />
          <CustomFooter />
        </div>
      }

    </div>
  );
}

export default App;
