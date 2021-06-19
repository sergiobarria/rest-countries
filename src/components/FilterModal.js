import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import { useModal } from '../hooks/useModal';
import useCountries from '../hooks/useCountries';

const FilterModal = () => {
  const { modalStatus, toggleModalStatus } = useModal();
  const { getCountriesByRegion } = useCountries();

  const activeRegionHandler = e => {
    const region = e.target.getAttribute('data-region');

    if (region) {
      console.log(region);
      getCountriesByRegion(region);
    }

    toggleModalStatus();
  };
  return (
    <div>
      {modalStatus === 'open' && (
        <RegionsOptions>
          <ul>
            <li>
              <NavLink
                to="/africa"
                data-region="africa"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                Africa
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/americas"
                data-region="americas"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                Americas
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/asia"
                data-region="asia"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                Asia
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/europe"
                data-region="europe"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                Europe
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oceania"
                data-region="oceania"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                Oceania
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/all"
                data-region="all"
                activeClassName="selected"
                onClick={e => activeRegionHandler(e)}
              >
                All
              </NavLink>
            </li>
          </ul>
        </RegionsOptions>
      )}
    </div>
  );
};

export default FilterModal;

const RegionsOptions = styled.div`
  margin-top: 5px;
  padding: 1rem 1.5rem;
  background-color: ${props => props.theme.elements};
  border-radius: 5px;
  font-size: 0.875rem;
  z-index: 10;
  width: 100%;
  position: absolute;

  ul {
    list-style: none;
    font-size: 0.875rem;

    li {
      cursor: pointer;
      color: ${props => props.theme.text};
    }

    li:hover {
      opacity: 0.5;
    }

    a {
      text-decoration: none;
      color: ${props => props.theme.text};
    }

    a.selected {
      color: #14aa52;
      font-weight: 600;
    }

    li:not(:last-child) {
      margin-bottom: 0.5rem;
    }
  }
`;
