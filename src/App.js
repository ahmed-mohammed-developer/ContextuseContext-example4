import './App.css';
import React, { useState } from 'react';
import { UserContext } from './ExContext/UserContext';
import UserProfile from './ExContext/UserProfile'


function App() {
  const [user, setUser] = useState({name: "Ahmed", age: 55})
 
  return (
    <div className="App">
      <UserContext.Provider value={user} >
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
}

export default App;
