import React from 'react';
import styled from 'styled-components';
import { Header } from '../components/Header';
import { breakpoint, colors } from '../config';

const ShellContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 60px auto;
  position: absolute;
  width: 100%;
  min-height: 100%;
  
  @media all and (min-width: ${breakpoint.MD}) {
    grid-template-columns: 300px auto;
  }
`;

export const Shell = ({ children }: any) => {
  return (
    <ShellContainer>
      <Header/>
      {children}
    </ShellContainer>
  );
};
