import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import useCountries from '../hooks/useCountries';

const BorderCountries = () => {
  const { countryDetails } = useCountries();

  return (
    <BorderCountriesContainer>
      <h3>Border Countries:</h3>
      <BtnContainer>
        {countryDetails.borderCountries !== undefined &&
          countryDetails.borderCountries.length > 0 &&
          countryDetails.borderCountries.map(({ name, code }) => (
            <BorderCountryBtn type="button" key={code}>
              <NavLink to={`/details/${code.toLowerCase()}`}>{name}</NavLink>
            </BorderCountryBtn>
          ))}
      </BtnContainer>
    </BorderCountriesContainer>
  );
};

const BorderCountriesContainer = styled.div`
  display: flex;
  align-items: flex-start;

  h3 {
    font-weight: 600;
    font-size: 1rem;
  }
`;

const BtnContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: 2rem;
`;

const BorderCountryBtn = styled.button`
  padding: 0.375rem 1.875rem;
  background-color: ${props => props.theme.elements};
  margin-bottom: 1rem;
  color: ${props => props.theme.text};
  transition: all 300ms ease-in-out;
  border: none;
  border-radius: 5px;
  font-weight: 300;
  font-family: Nunito Sans, sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    opacity: 0.7;
  }

  a {
    text-decoration: none;
    color: ${props => props.theme.text};
  }
`;

export default BorderCountries;
