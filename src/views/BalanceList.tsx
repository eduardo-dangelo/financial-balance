import * as React from "react";
import styled from "styled-components";
import { breakpoint } from "../config";
import { balances } from "../config/testData";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";

const List = styled.div<{}>`
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(1, 1fr);
  transition: 0.6s ease;
  padding: 15px;

  @media all and (min-width: ${breakpoint.XS}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media all and (min-width: ${breakpoint.SM}) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media all and (min-width: ${breakpoint.MD}) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media all and (min-width: ${breakpoint.LG}) {
    grid-template-columns: repeat(6, 1fr);
  }
`;

const ListItem = styled.div<{}>`
  background: #efeeee;
  border: 1px solid gray;
  border-radius: 8px;
  padding: 15px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
  transition: 0.3s ease;

  &:hover {
    box-shadow: 0 0 0 rgba(0, 0, 0, 0.2);
  }
`;

const data = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BalanceList = () => {
  return (
    <List>
      {balances.map((balance) => {
        console.log("balance", balance);
        return (
          <Link to={`/balance/${balance.id}`} key={balance.id}>
            <ListItem>
              <h3>{balance.name}</h3>
              <Line data={data} />
            </ListItem>
          </Link>
        );
      })}
    </List>
  );
};

export default BalanceList;
