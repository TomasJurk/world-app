import React, { useEffect, useState }  from 'react';
import axios from 'axios';
import styles from './App.module.css';
import CountriesTable from './components/CountriesTable/CountriesTable';

const App = () => {

  const [ countries, setCountries ] = useState([]);

  useEffect(() => {
    fetchCountries();
  })

  const fetchCountries = async () => {
    const url = 'https://restcountries.eu/rest/v2/all?fields=name;region;area;population;languages';
    try {
      const countries = await axios.get(url, {timeout: 5000});
      setCountries(countries.data)
    } catch (error) {
      console.log('Error ', error)
    }
  }

  return (
    <div className={styles.App}>
      <header>
        <h1>List of coutries</h1>
      </header>
      <CountriesTable countries={countries} />
    </div>
  );
}

export default App;
