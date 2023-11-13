
import React, { useEffect, useState } from 'react';
import { getLocations } from '../../mock-api/apis';


function LocationSelect() {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState('');

    useEffect(() => {
        getLocations().then((countries) => {
            setCountries(countries);
        });
        }, []);

    function handleCountryChange(event) {
        setSelectedCountry(event.target.value);
    }

  return (
    <div>
      <label htmlFor="country-select">Select your country:</label>
      <select id="country-select" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">--Please choose a country--</option>
        {countries.map((country) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
    </div>
  );
}

export default LocationSelect;
