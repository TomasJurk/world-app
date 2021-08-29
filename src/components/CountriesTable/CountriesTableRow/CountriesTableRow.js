import React from 'react';

const CountriesTableRow = ({ name, region, area, population }) => {
  let formatedPopulation = population;
  if (population && population > 0) {
    formatedPopulation = population / 1000000 >= 0.1 ? Math.round(population / 100000) / 10 : '< 0.1';
  } else {
    formatedPopulation = 'Uninhabited';
  }
  return (
    <tr>
      <td>{name}</td>
      <td>{region}</td>
      <td>{area === '###' ? area : Math.round(area / 2.59)}</td>
      <td>{formatedPopulation}</td>
    </tr>
  );
};

export default CountriesTableRow;
