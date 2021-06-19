import { useContext } from 'react';

import CountriesContext from '../context/countries-context';

const useCountries = () => {
  const ctx = useContext(CountriesContext);

  return ctx;
};

export default useCountries;
