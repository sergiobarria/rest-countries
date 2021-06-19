import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Card = props => {
  const { name, population, region, capital, flag, alpha3Code } = props;

  const formatedPopulation = population
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');

  return (
    <CardWrapper>
      <Link to={`/details/${alpha3Code.toLowerCase()}`}>
        <img src={flag} alt={name} />
        <CardContent>
          <h2>{name}</h2>
          <p>
            <span>Population: </span>
            {formatedPopulation}
          </p>
          <p>
            <span>Region: </span>
            {region}
          </p>
          <p>
            <span>Capital: </span>
            {capital}
          </p>
        </CardContent>
      </Link>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  grid-column: span 12;
  background: ${props => props.theme.elements};
  border-radius: 5px;
  overflow: hidden;
  max-width: 264px;
  margin: 0 auto;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.25);
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 8px 8px 15px 2px rgba(0, 0, 0, 0.25);
  }

  @media (min-width: 768px) {
    grid-column: span 6;
  }

  @media (min-width: 1024px) {
    grid-column: span 4;
  }

  @media (min-width: 1200px) {
    grid-column: span 3;
  }

  a,
  a::after,
  a::before {
    text-decoration: none;
    color: ${props => props.theme.text};
  }

  img {
    width: 100%;
    height: 10rem;
    object-fit: cover;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem 1.5rem 2.875rem;

  h2 {
    margin-bottom: 1rem;
    font-size: 1.125rem;
  }

  span {
    font-weight: 800;
  }

  p {
    font-size: 0.875rem;

    &:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;

export default Card;
