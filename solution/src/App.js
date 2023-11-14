import logo from './logo.svg';
import './App.css';
import InputUser from './userInput/inputUser';
import UserTable from './userTable/userTable';
import React, { useState, useEffect } from "react";


export const UserContext = React.createContext([]);

function App() {
  return (
    <UserContext.Provider value={[
      {name: 'John', location: 'Canada'},
    {name: 'Jane', location: 'China'},
    {name: 'Bob', location: 'USA'},
    {name: 'Bill', location: 'Brazil'},
    {name: 'Joe', location: 'Canada'},
    {name: 'Jill', location: 'China'},
    {name: 'Ben', location: 'USA'},

    ]}>
      <div className="App">
        <header>
          <h1>Liam van Leynseele Solution</h1>
        </header>
        <InputUser />
        <br></br>
        <UserTable />

      </div>
    </UserContext.Provider>
  );
}

export default App;
