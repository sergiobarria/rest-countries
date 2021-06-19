import { MdKeyboardArrowUp } from 'react-icons/md';
import styled from 'styled-components';

import { useModal } from '../hooks/useModal';
import FilterModal from '../components/FilterModal';

const RegionFilter = () => {
  const { modalStatus, toggleModalStatus } = useModal();

  return (
    <RegionFilterContainer modalStatus={modalStatus}>
      <button type="button" onClick={toggleModalStatus}>
        Filter by Region <MdKeyboardArrowUp />
      </button>
      <FilterModal />
    </RegionFilterContainer>
  );
};

export default RegionFilter;

const RegionFilterContainer = styled.div`
  position: relative;

  button {
    width: 12.5rem;
    height: 3rem;
    font-family: Nunito Sans, sans-serif;
    border: none;
    background-color: ${props => props.theme.elements};
    color: ${props => props.theme.text};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1.5rem;
    border-radius: 5px;
    cursor: pointer;

    svg {
      font-size: 1.5rem;
      transition: transform 300ms ease-in-out;

      transform: ${props => {
        if (props.modalStatus === 'open') {
          return 'rotate(180deg)';
        }

        if (props.modalStatus === 'closed') {
          return 'rotate(initial)';
        }
      }};
    }
  }
`;
