import React from 'react';
import styles from './CountriesTable.module.css';
import CountriesTableRow from './CountriesTableRow/CountriesTableRow';

const CountriesTable = ({ countries }) => {
    const countryRows = countries.map(country => (
        <CountriesTableRow 
            name={country.name}
            region={country.region}
            area={country.area}
            population={country.population}/>
    ));
    return (
        <div className={styles.TableWrapper}>
        <section className={styles.CountriesList}>
            <table className={styles.CountriesTable}>
            <thead>
                <tr>
                <th>Name</th>
                <th>Region</th>
                <th>Area (sq mi)</th>
                <th>Population (mil)</th>
                </tr>
            </thead>
            <tbody>
                {countryRows}
            </tbody>
            </table>
        </section>
        </div>
    );
};

export default CountriesTable;
