import React from 'react';
import {ToastContainer} from 'react-toastify'
import Routes from './routes'

function App() {
  return (
    <div>
      <ToastContainer
        position='bottom-right'
        autoClose={5000}
        newestOnTop={true}
        closeOnClick={true}
        pauseOnHover={true}
      />
      <Routes />
    </div>
  );
}

export default App;
