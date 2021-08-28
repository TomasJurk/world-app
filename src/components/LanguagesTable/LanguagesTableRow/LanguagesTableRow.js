import React from 'react';

const LanguagesTableRow = ({ name, countries, totalSpeakers }) => {
    const countriesView = countries.map((country, i) => {
        if (i === countries.length-1) {
            return <span>{country}</span>
        }
        return <span>{country + ', '}</span>
    })

    let formatedPopulation = totalSpeakers / 1000000 >= 0.1 ? Math.round(totalSpeakers / 100000) / 10 : '< 0.1';

    return (
      <tr>
        <td>{`${name} (${countries.length})`}</td>
        <td>{countriesView}</td>
        <td>{formatedPopulation}</td>
      </tr>
    );
}

export default LanguagesTableRow;