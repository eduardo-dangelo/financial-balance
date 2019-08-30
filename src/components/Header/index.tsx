import * as React from 'react';
import styled from 'styled-components';
import {breakpoint, colors} from '../../config';

const HeaderContainer = styled.div`
  background: ${colors.header.bg};
  color: ${colors.header.color};
  padding: 15px;
  display: flex;
  align-items: stretch;
  
  @media all and (min-width: ${breakpoint.MD}) {
    grid-row: 1 / span 2;
  }
  
  h1 {
    margin: 0;
  }
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Page Title</Title>
    </HeaderContainer>
  );
};
