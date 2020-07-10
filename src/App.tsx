import React from "react";
import BalanceList from "./views/BalanceList";
import "./config/style.css";
import { Shell } from "./layout/Shell";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Balance from "./views/Balance";

const App = () => {
  return (
    <Shell>
      <Router>
        <Switch>
          <Route path="/" exact={true}>
            <BalanceList />
          </Route>
          <Route path="/balance/:id">
            <Balance />
          </Route>
        </Switch>
      </Router>
    </Shell>
  );
};

export default App;
