import React from 'react';
import styled from 'styled-components';

const Container = ({ children }) => {
  return <BoxContainer>{children}</BoxContainer>;
};

const BoxContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
`;

export default Container;
