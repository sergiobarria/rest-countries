import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

import Container from '../components/Container';
import CountryInfo from '../components/CountryInfo';
import Spinner from '../components/Spinner';

import useCountries from '../hooks/useCountries';

const DetailsView = () => {
  const history = useHistory();
  const { code } = useParams();
  const { countryDetails, getCountryByCode, isLoading } = useCountries();
  const fetchData = useRef(getCountryByCode);

  useEffect(() => {
    fetchData.current(code);
  }, [fetchData, code]);

  const returnBtnHandler = () => {
    history.push('/all');
  };

  return (
    <Wrapper>
      <Container>
        <BackBtn onClick={returnBtnHandler}>
          <BsArrowLeft /> Back
        </BackBtn>

        {isLoading ? <Spinner /> : countryDetails ? <CountryInfo /> : null}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: 2.5rem 0;
  padding: 0 1.75rem;
`;

const BackBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px 24px;
  border: none;
  background-color: ${props => props.theme.elements};
  color: ${props => props.theme.text};
  border-radius: 5px;
  font-weight: 300;
  font-family: Nunito Sans, sans-serif;
  font-size: 0.875rem;
  cursor: pointer;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.25);

  svg {
    font-size: 1.5rem;
    margin-right: 0.5rem;
  }
`;

export default DetailsView;
