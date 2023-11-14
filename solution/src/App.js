import logo from './logo.svg';
import './App.css';
// import InputUser from './userInput/inputUser';
// import UserTable from './userTable/userTable';
import React, { useState, useEffect } from "react";
import { getLocations, isNameValid } from "./mock-api/apis";



function App() {
    //state of name text input field
    const [name, setName] = useState("");
    
    //state of country select field and options being loaded
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    //state of users being added. As inputs are generated, list can pull in new additions
    const [users, setUsers] = useState([]);

    //variables for pagination for organization purposes
    const [page, setPage] = useState(0);
    const pageSize = 5;
    const pageCount = Math.ceil(users.length / pageSize);
    const pageUsers = users.slice(page * pageSize, (page + 1) * pageSize);

    //get list of countries from mock-api/apis.js
    useEffect(() => {
        getLocations().then((countries) => {
            setCountries(countries);
        });
    }, []);

    //handle name input change
    function handleNameChange(event) {
        setName(event.target.value);
    }

    //handle country select change
    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }

    //clear inputs on clear button click
    const clearInputs = () => {
        setName("");
        setSelectedCountry("");
    }

    //handle add button click
    //check if name and country have values, name is valid, and name not already in list
    const handleAddClick = () => {
        if(!selectedCountry) {
            alert("Please select a country");
            return;
        }
        if(!name) {
            alert("Please enter a name");
            return;
        }
        if(!isNameValid(name)) {
            alert("Please enter a valid name");
            return;
        }
        //user with same name cannot be from the same country
        if(users.filter(user => user.name === name).length > 0 && users.filter(user => user.location === selectedCountry).length > 0) {
            alert("Cannot add duplicate name from same country");
            return;
        }

        console.log(`Name: ${name}, Country: ${selectedCountry}`);
        setUsers([...users, {'name': name, 'location': selectedCountry}]);
    }

  return (
      <div className="App">
        <header>
          <h1>Liam van Leynseele Solution</h1>
        </header>

        {/* code for user input fields: */}
        <div>
            <div style={{padding: "2px"}}>
                <label htmlFor="name" style={{padding: "2px"}}>Name:</label>
                <input type="text" style={{padding: "2px", width: "250px"}} id="name" name="name" value={name} onChange={handleNameChange} />
            </div>

            <div style={{padding: "2px"}}>
                <label htmlFor="country-select" style={{padding: "2px"}}>Select your country:</label>
                <select id="country-select" style={{padding: "2px"}} value={selectedCountry} onChange={handleCountryChange}>
                    <option value="">--Please choose a country--</option>
                    {countries.map((country) => (
                    <option key={country} value={country}>
                        {country}
                    </option>
                    ))}
                </select>
            </div>
            <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
              <button onClick={clearInputs}>Clear</button>
              <button onClick={handleAddClick}>Add</button>
            </div>
        </div>
        <br></br>

        {/* code for table of users: */}
        <div style={{justifyContent: "center"}}>
            <table style={{ width: "400px", border: "2px solid black", borderCollapse: "collapse", margin: "0 auto" }}>
                <thead style={{border: "1px solid black", margin: "0 auto"}}>
                    <tr>
                        <th style={{borderRight: "1px solid black"}}>Name</th>
                        <th>Location</th>
                    </tr>
                </thead>
                <tbody style={{border: "1px solid black", margin: "0 auto"}}>
                    {pageUsers.map((user) => (
                        <tr key={user.name} style={{borderBottom: "1px dotted black"}}>
                            <td style={{borderRight: "1px solid black"}}>{user.name}</td>
                            <td>{user.location}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                {Array.from({ length: pageCount }, (_, i) => (
                    <button key={i} onClick={() => setPage(i)}>
                        {i + 1}
                    </button>
                ))}
            </div>
        </div>
      </div>
  );
}

export default App;
