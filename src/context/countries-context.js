import { useState, createContext } from 'react';
import axios from 'axios';

const CountriesContext = createContext({
  isLoading: false,
  getAllCountries: () => {},
  getCountryByCode: code => {},
  getCountriesByRegion: region => {},
  searchCountry: () => {},
  setCountryDetails: () => {},
  countries: [],
  searchValues: '',
  searchList: [],
  selectedRegion: '',
  countryDetails: {},
});

export const CountriesContextProvider = props => {
  const [countries, setCountries] = useState([]);
  const [countryDetails, setCountryDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [searchValues, setSearchValues] = useState('');
  const [searchList, setSearchList] = useState([]);

  const getAllCountries = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get('https://restcountries.eu/rest/v2/all');
      const data = res.data;

      setCountries(data);
      setSearchList('');
      setSelectedRegion('all');
      setSearchValues('');
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const getCountriesByRegion = async region => {
    try {
      if (region === 'all') {
        getAllCountries();
      } else {
        setIsLoading(true);

        const res = await axios.get(
          `https://restcountries.eu/rest/v2/region/${region}`
        );
        const data = res.data;
        const formattedRegion = region.replace(/\b\w/g, c => c.toUpperCase());

        setSelectedRegion(formattedRegion);
        setCountries(data);
        setSearchValues('');
        setSearchList([]);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err.message);

      setIsLoading(false);
    }
  };

  const getCountryByCode = async code => {
    try {
      setIsLoading(true);

      const res = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      const data = res.data;

      const {
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        alpha3Code,
        topLevelDomain,
        currencies,
        languages,
        borders,
      } = data;

      // Get the country borders by code
      const borderCountries = await Promise.all(
        borders.map(country => getBorderCountries(country))
      );

      setCountryDetails({
        flag,
        name,
        nativeName,
        population,
        region,
        subregion,
        capital,
        alpha3Code,
        topLevelDomain,
        currencies,
        languages,
        borderCountries,
      });
      setIsLoading(false);
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  const searchCountry = values => {
    setSearchValues(values);

    if (values) {
      const filteredSearch = countries.filter(country =>
        country.name.toLowerCase().includes(values.toLowerCase())
      );

      setSearchList(filteredSearch);
    } else {
      setSearchList([]);
    }
  };

  const getBorderCountries = async code => {
    try {
      const res = await axios.get(
        `https://restcountries.eu/rest/v2/alpha/${code}`
      );
      const data = res.data;

      const countriesData = { name: data.name, code: data.alpha3Code };

      return countriesData;
    } catch (err) {
      console.log(err.message);
      setIsLoading(false);
    }
  };

  return (
    <CountriesContext.Provider
      value={{
        getAllCountries,
        getCountriesByRegion,
        searchCountry,
        setCountryDetails,
        getCountryByCode,
        countries,
        isLoading,
        selectedRegion,
        searchValues,
        searchList,
        countryDetails,
      }}
    >
      {props.children}
    </CountriesContext.Provider>
  );
};

export default CountriesContext;
