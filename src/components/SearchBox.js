import React, { useRef } from 'react';
import styled from 'styled-components';
import { BsSearch } from 'react-icons/bs';

import useCountries from '../hooks/useCountries';

const SearchBox = ({ setSearch }) => {
  const { searchCountry } = useCountries();
  const inputRef = useRef(null);

  const searchHandler = () => {
    if (inputRef.current) {
      searchCountry(inputRef.current.value);
    }
  };

  return (
    <Search>
      <BsSearch />
      <input
        aria-label="Search Country"
        aria-required="true"
        name="search"
        type="text"
        placeholder="Search for a country..."
        onChange={searchHandler}
        ref={inputRef}
      />
    </Search>
  );
};

const Search = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  height: 3rem;
  position: relative;
  border-radius: 5px;

  input[type='text'] {
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    border: none;
    height: 100%;
    width: 100%;
    padding-left: 4.5rem;
    border-radius: 5px;

    &::placeholder {
      font-family: Nunito Sans, sans-serif;
      font-size: 0.75rem;
      color: #c4c4c4;
    }

    &:focus {
      outline: none;
    }
  }

  svg {
    /* background-color: ${props => props.theme.elements}; */
    position: absolute;
    left: 2rem;
    font-size: 1rem;
    color: #b2b2b2;
  }

  @media (min-width: 768px) {
    input[type='text'] {
      width: 30rem;

      &::placeholder {
        font-size: 0.875rem;
      }
    }
  }
`;

export default SearchBox;
