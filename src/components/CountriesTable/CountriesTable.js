import React from 'react';
import styles from './CountriesTable.module.css';
import CountriesTableRow from './CountriesTableRow/CountriesTableRow';

const CountriesTable = ({ countries }) => {
  const countryRows = countries.map((country, i) => (
    <CountriesTableRow
      key={Math.random() + i}
      name={country.name}
      region={country.region ? country.region : '###'}
      area={country.area ? country.area : '###'}
      population={country.population}
    />
  ));
  return (
    <section className={styles.CountriesList}>
      <div className={styles.TableWrapper}>
        <table className={styles.CountriesTable}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Region</th>
              <th>Area (sq mi)</th>
              <th>Population (mil)</th>
            </tr>
          </thead>
          <tbody>{countryRows}</tbody>
        </table>
      </div>
    </section>
  );
};

export default CountriesTable;
