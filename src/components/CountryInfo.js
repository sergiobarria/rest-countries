import styled from 'styled-components';

import useCountries from '../hooks/useCountries';
import BorderCountries from '../components/BorderCountries';

const CountryInfo = () => {
  const { countryDetails } = useCountries();

  return (
    <CountryInfoCard>
      <CountryFlagContainer>
        {countryDetails.flag && (
          <img src={countryDetails.flag} alt={countryDetails.name} />
        )}
      </CountryFlagContainer>
      <CountryInfoContainer>
        <h2>{countryDetails.name}</h2>
        <GridContainer>
          <div>
            <p>
              <span>Native Name: </span>
              {countryDetails.nativeName}
            </p>
            <p>
              <span>Population: </span>
              {countryDetails.population &&
                countryDetails.population
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </p>
            <p>
              <span>Region: </span>
              {countryDetails.region}
            </p>
            <p>
              <span>Sub Region: </span>
              {countryDetails.subregion}
            </p>
            <p>
              <span>Capital: </span>
              {countryDetails.capital}
            </p>
          </div>

          <div>
            <p>
              <span>Top Level Domain: </span>
              {countryDetails.topLevelDomain}
            </p>
            <p>
              <span>Currencies: </span>
              {countryDetails.currencies &&
                countryDetails.currencies.map((currency, i) => (
                  <span key={i}>{currency.name}</span>
                ))}
            </p>
            <p>
              <span>Languages: </span>
              {countryDetails.languages &&
                countryDetails.languages.map((language, i) => (
                  <span key={i}>{language.name}, </span>
                ))}
            </p>
          </div>
        </GridContainer>
        <BorderCountries />
      </CountryInfoContainer>
    </CountryInfoCard>
  );
};

const CountryInfoCard = styled.div`
  margin: 4rem 0;

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

const GridContainer = styled.div`
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const CountryFlagContainer = styled.div`
  img {
    max-width: 560px;
    width: 100%;
    height: 230px;
    object-fit: cover;
    border-radius: 5px;
  }

  @media (min-width: 1024px) {
    img {
      height: 401px;
    }
  }
`;

const CountryInfoContainer = styled.article`
  max-width: 598px;

  h2 {
    margin-top: 2.75rem;
    margin-bottom: 1rem;
  }

  p {
    font-size: 0.875rem;
    line-height: 32px;

    & span:first-of-type {
      font-weight: 800;
    }
  }

  & div:first-of-type {
    margin-bottom: 2rem;
  }
`;

export default CountryInfo;
