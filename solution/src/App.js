import logo from './logo.svg';
import './App.css';
import InputUser from './userInput/inputUser';
import UserTable from './userTable/userTable';
import React, { useState, useEffect } from "react";

export const UserContext = React.createContext([]);

function App() {
  return (
    <div className="App">
      <header>
        <h1>Liam van Leynseele Solution</h1>
      </header>
      <InputUser />
      <br></br>
      <UserTable />

    </div>
  );
}

export default App;
