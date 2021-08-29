export const sortByName = (countries, sortWay) => {
  let sorted;
  if (sortWay === 'des') {
    sorted = [...countries].sort((a, b) => {
      if (a.name.toLowerCase().replace('å', 'a') > b.name.toLowerCase().replace('å', 'a')) {
        return 1;
      } else if (b.name.toLowerCase().replace('å', 'a') > a.name.toLowerCase().replace('å', 'a')) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  if (sortWay === 'asc') {
    sorted = [...countries].sort((a, b) => {
      if (b.name.toLowerCase().replace('å', 'a') > a.name.toLowerCase().replace('å', 'a')) {
        return 1;
      } else if (a.name.toLowerCase().replace('å', 'a') > b.name.toLowerCase().replace('å', 'a')) {
        return -1;
      } else {
        return 0;
      }
    });
  }
  return sorted;
};

export const sortByNumbers = (countries, sortName, sortWay) => {
  let sorted;
  if (sortWay === 'des') {
    sorted = [...countries].sort((a, b) => {
      if (isNaN(a[sortName])) {
        return 1;
      } else if (isNaN(b[sortName])) {
        return -1;
      } else {
        return parseInt(b[sortName]) - parseInt(a[sortName]);
      }
    });
  }
  if (sortWay === 'asc') {
    sorted = [...countries].sort((a, b) => {
      if (isNaN(a[sortName]) || a[sortName] === 0) {
        return 1;
      } else if (isNaN(b[sortName]) || b[sortName] === 0) {
        return -1;
      } else {
        return parseInt(a[sortName]) - parseInt(b[sortName]);
      }
    });
  }
  return sorted;
};

export const calculateSummaryFacts = countries => {
  const inhabitedCountries = countries.filter(country => country.population > 0).length;
  const totalPopulation = countries.reduce((a, b) => {
    return a + b.population;
  }, 0);
  const averagePopulation = Math.round(totalPopulation / inhabitedCountries / 100000) / 10;

  const biggestArea = { name: '', area: 0 };
  const smallestArea = { name: '', area: 99999999 };

  for (let i = 0; i < countries.length; i++) {
    if (countries[i].area > biggestArea.area) {
      biggestArea.area = countries[i].area;
      biggestArea.name = countries[i].name;
    }
    if (countries[i].area < smallestArea.area) {
      smallestArea.area = countries[i].area;
      smallestArea.name = countries[i].name;
    }
  }

  return {
    averagePopulation,
    biggestArea,
    smallestArea
  };
};

export const filterLanguages = countries => {
  const filteredByLanguages = {};

  for (let i = 0; i < countries.length; i++) {
    countries[i].languages.forEach(lang => {
      if (!filteredByLanguages.hasOwnProperty(lang.iso639_2)) {
        filteredByLanguages[lang.iso639_2] = {};
        filteredByLanguages[lang.iso639_2].countries = [];
        filteredByLanguages[lang.iso639_2].countries.push(countries[i].name);
        filteredByLanguages[lang.iso639_2].totalSpeakers = countries[i].population;
        filteredByLanguages[lang.iso639_2].name = lang.name;
      } else {
        filteredByLanguages[lang.iso639_2].countries.push(countries[i].name);
        filteredByLanguages[lang.iso639_2].totalSpeakers += countries[i].population;
      }
    });
  }

  return filteredByLanguages;
};
