import React from 'react';

const CountriesTableRow = ({ name, region, area, population }) => {
    const formatedPopulation = population / 1000000 >= 0.1 ? Math.round(population / 100000) / 10 : '< 0.1';
    return (
        <tr>
            <td>{name}</td>
            <td>{region}</td>
            <td>{Math.round(area / 2.59)}</td>
            <td>{formatedPopulation}</td>
        </tr>
    );
}

export default CountriesTableRow;