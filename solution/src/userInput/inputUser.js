import React, { useState, useEffect } from "react";
import { getLocations, isNameValid, addUser } from "../mock-api/apis";
import UsersContext from "../App"


const UserContext = React.createContext([]);


export function InputUser() {
    const [name, setName] = useState("");
    
    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    const [users, setUsers] = useState([]);

    useEffect(() => {
        getLocations().then((countries) => {
            setCountries(countries);
        });
    }, []);

    function handleNameChange(event) {
        setName(event.target.value);
    }

    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }

    const clearInputs = () => {
        setName("");
        setSelectedCountry("");
    }

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

        console.log(`Name: ${name}, Country: ${selectedCountry}`);
        setUsers([...users, {'name': name, 'location': selectedCountry}]);
    }

    return(
        <div>
            <div style={{padding: "2px"}}>
                <label htmlFor="name" style={{padding: "2px"}}>Name:</label>
                <input type="text" style={{padding: "2px"}} id="name" name="name" value={name} onChange={handleNameChange} />
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
            
            <button onClick={clearInputs}>Clear</button>
            <button onClick={handleAddClick}>Add</button>
        </div>
    )
}

export default InputUser;
