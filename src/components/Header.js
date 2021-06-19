import React from 'react';
import styled from 'styled-components';
import { FiMoon } from 'react-icons/fi';
import { FiSun } from 'react-icons/fi';

const Header = ({ currTheme, themeToggler }) => {
  const themeHandler = () => {
    if (currTheme === 'light') {
      themeToggler('dark');
    }
    if (currTheme === 'dark') {
      themeToggler('light');
    }
  };

  return (
    <NavbarContainer>
      <Navbar>
        <h1>Where in the world?</h1>
        <ToggleBtn onClick={themeHandler}>
          {currTheme === 'light' ? <FiMoon /> : <FiSun />}
          <span>Dark Mode</span>
        </ToggleBtn>
      </Navbar>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.header`
  background-color: ${props => props.theme.elements};
  height: 5rem;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 8px -2px rgba(0, 0, 0, 0.15);
`;

const Navbar = styled.nav`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-size: 0.875rem;
  }

  @media (min-width: 768px) {
    h1 {
      font-size: 1.5rem;
    }
  }
`;

const ToggleBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: transparent;
  border: none;
  color: ${props => props.theme.text};
  width: 5.25rem;
  font-family: Nunito Sans, sans-serif;
  cursor: pointer;

  svg {
    font-size: 1rem;
  }

  span {
    font-size: 0.75rem;
  }

  @media (min-width: 768px) {
    width: 6.75rem;

    svg {
      font-size: 1.25rem;
    }

    span {
      font-size: 1rem;
    }
  }
`;

export default Header;
