import styled from 'styled-components';

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
              {name}
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
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-in-out;

  &:not(:last-child) {
    margin-right: 1rem;
  }

  &:hover {
    transform: scale(1.05);
    font-weight: 400;
  }
`;

export default BorderCountries;