import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import styles from './App.module.css';
import CountriesTable from './components/CountriesTable/CountriesTable';

const App = () => {

  const [ countries, setCountries ] = useState([]);

  const [ sortOption, setSortOption ] = useState('namedes')

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;region;area;population;languages';
    try {
      const countries = await axios.get(url, {timeout: 5000});
      setCountries(countries.data);
    } catch (error) {
      console.log('Error ', error);
    }
  }

  const sortCountries = (event) => {
    console.log(event.target.value);
    setSortOption(event.target.value);
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>List of coutries</h1>
      </header>
      <div className={styles.SortingContainer}>
        <label>
          Sort countries by:
          <select value={sortOption} onChange={(e) => sortCountries(e)}>
            <option value="name$des">
              Name A-Z
            </option>
            <option value="name$asc">
              Name Z-A
            </option>
            <option value="area$des">
              Area high-low
            </option>
            <option value="area$asc">
              Area low-high
            </option>
            <option value="population$des">
              Population high-low
            </option>
            <option value="population$asc">
              Population low-high
            </option>
          </select>
        </label>
      </div>
      <CountriesTable countries={countries} />
    </div>
  );
}

export default App;
