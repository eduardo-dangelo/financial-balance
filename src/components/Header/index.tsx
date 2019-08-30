import * as React from 'react';
import styled from 'styled-components';
import { FaCog } from 'react-icons/fa'
import {breakpoint, colors} from '../../config';

const HeaderContainer = styled.div`
  background: ${colors.header.bg};
  color: ${colors.header.color};
  display: grid;
  grid-template-columns: repeat(2, auto);
  
  @media all and (min-width: ${breakpoint.MD}) {
    grid-row: 1 / span 2;
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: 60px auto;
  }
`;

const Title = styled.div`
  padding: 15px;
  font-size: 1.2rem;
  align-self: center;
  justify-self: start;
  
  @media all and (min-width: ${breakpoint.MD}) {
    justify-self: stretch;
  }
`;

const Menu = styled.div`
  padding: 15px;
  align-self: center;
  justify-self: end;
  
  @media all and (min-width: ${breakpoint.MD}) {
    align-self: start;
    justify-self: stretch;
  }
`;

export const Header = () => {
  return (
    <HeaderContainer>
      <Title>Page Title</Title>
      <Menu>
        <FaCog/>
      </Menu>
    </HeaderContainer>
  );
};
