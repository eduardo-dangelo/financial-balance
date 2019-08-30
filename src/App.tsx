import React from 'react';
import BalanceList from './views/BalanceList'
import './config/style.css'
import {Shell} from './layout/Shell';

const App = () => {
  return (
    <Shell>
      <BalanceList/>
    </Shell>
  );
};


export default App;
