import React from 'react';
import BalanceList from './views/BalanceList'
import styled from 'styled-components';
import { Header } from './components/Header';
import './config/style.css'
import { breakpoint } from './config';

const Shell = styled.div`
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

const App = () => {
  return (
    <Shell>
      <Header/>
      <BalanceList/>
    </Shell>
  );
};


export default App;
