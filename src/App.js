import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './App.module.css';
import CountriesTable from './components/CountriesTable/CountriesTable';
import Summary from './components/Summary/Summary';
import LanguagesTable from './components/LanguagesTable/LanguagesTable';
import { sortByName, sortByNumbers, calculateSummaryFacts, filterLanguages } from './shared/utility';

const App = () => {
  const [countries, setCountries] = useState([]);
  const [sortOption, setSortOption] = useState('name$des');
  const [summary, setSummary] = useState({});
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;region;area;population;languages';
    try {
      const countries = await axios.get(url, { timeout: 5000 });
      setCountries(countries.data);
      setSummary(calculateSummaryFacts(countries.data));
      setLanguages(filterLanguages(countries.data));
    } catch (error) {
      console.log('Error:', error.message);
    }
  };

  const sortCountries = event => {
    const [sortName, sortWay] = event.target.value.split('$');
    setSortOption(event.target.value);
    if (sortName === 'name') {
      setCountries(sortByName(countries, sortWay));
    } else if (sortName === 'area' || sortName === 'population') {
      setCountries(sortByNumbers(countries, sortName, sortWay));
    }
  };

  return (
    <div className={styles.App}>
      <header>
        <h1>List of coutries</h1>
      </header>
      <div className={styles.SortingContainer}>
        <label>
          Sort countries by:
          <select value={sortOption} onChange={e => sortCountries(e)}>
            <option value="name$des">Name A-Z</option>
            <option value="name$asc">Name Z-A</option>
            <option value="area$des">Area high-low</option>
            <option value="area$asc">Area low-high</option>
            <option value="population$des">Population high-low</option>
            <option value="population$asc">Population low-high</option>
          </select>
        </label>
      </div>
      <CountriesTable countries={countries} />
      <Summary summary={summary} />
      <LanguagesTable languages={languages} />
    </div>
  );
};

export default App;
