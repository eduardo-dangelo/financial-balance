import React from "react";
import { withRouter } from "react-router-dom";
import { balances } from "../config/testData";

const Balance = (props: any) => {
  const id = parseInt(props.location.pathname.replace("/balance/", ""));
  const balance = balances.find((balance) => balance.id === id);
  console.log("props", balance);
  return (
    <div>
      <h1>{balance?.name}</h1>
    </div>
  );
};

export default withRouter(Balance);
