import React from 'react';
import Header from './Components/Header/Header'; // Adjust the path if your Header component is in a different directory
import './App.css';

function App() {
  return (
    <div className="App">
      <Header /> {/* This line includes the Header component */}
      {/* Rest of the app content */}
    </div>
  );
}

export default App;
