import React from 'react';

const CountriesTableRow = ({ name, region, area, population }) => {
    let formatedPopulation;
    if (population && population !== 'UNKNOWN') {
        formatedPopulation = population / 1000000 >= 0.1 ? Math.round(population / 100000) / 10 : '< 0.1';
    } else {
        formatedPopulation = 'UNINHABITED';
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{region}</td>
            <td>{area === 'UNKNOWN' ? area : Math.round(area / 2.59)}</td>
            <td>{formatedPopulation}</td>
        </tr>
    );
}

export default CountriesTableRow;