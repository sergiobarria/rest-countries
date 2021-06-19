import React, { useEffect } from 'react';
import styled from 'styled-components';

import SearchBox from '../components/SearchBox';
import Card from '../components/Card';
import Container from '../components/Container';
import RegionFilter from '../components/RegionFilter';
import Spinner from '../components/Spinner';

import useCountries from '../hooks/useCountries';

const HomeView = () => {
  const { countries, getAllCountries, isLoading, searchList, selectedRegion } =
    useCountries();

  useEffect(() => {
    if (!countries.length > 0) {
      getAllCountries();
    }
  }, [countries, getAllCountries]);

  return (
    <>
      <Container>
        <Filters>
          <SearchBox />
          <RegionFilter />
        </Filters>
        {selectedRegion === 'all' ? (
          <Title>All Regions</Title>
        ) : (
          <Title>{selectedRegion}</Title>
        )}
        {isLoading ? (
          <Spinner />
        ) : (
          <CardsContainer>
            {countries &&
              (searchList.length > 0 ? searchList : countries).map(
                (country, i) => {
                  return <Card key={i} {...country} />;
                }
              )}
          </CardsContainer>
        )}
      </Container>
    </>
  );
};

const Filters = styled.div`
  margin-top: 3rem;
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  max-width: 1280px;
  row-gap: 2.5rem;
  margin: 2rem 3rem;

  @media (min-width: 1024px) {
    margin: 0;
    column-gap: 4.5rem;
  }
`;

const Title = styled.h1`
  font-size: 1.5rem;
  text-align: center;
  margin-bottom: 2rem;
  margin-top: 2rem;

  @media (min-width: 1024px) {
    font-size: 2.5rem;
    margin-top: 0;
  }
`;

export default HomeView;
