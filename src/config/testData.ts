import { Balance } from "./types";

const categoriesTypes = {
  INCOME: "income",
  EXPENSES: "expenses",
};

const permissionTypes = {
  ADMIN: "admin",
  USER: "user",
};

export const balances: Balance[] = [
  {
    id: 111,
    name: "my First Balance",
    initialBalance: 3000,
    categories: [
      {
        id: 21,
        name: "General Expenses",
        color: "#d44949",
      },
      {
        id: 22,
        name: "Credit Card",
        color: "#efb926",
      },
      {
        id: 23,
        name: "Income",
        color: "#6fb157",
      },
    ],
    users: [
      {
        id: 0,
        permission: permissionTypes.ADMIN,
      },
      {
        id: 1,
        permission: permissionTypes.USER,
      },
    ],
    inputs: [
      {
        id: 411,
        type: categoriesTypes.INCOME,
        value: 4200,
        category: 23,
        description: "Salary",
        date: "01-07-2020",
      },
      {
        id: 412,
        type: categoriesTypes.EXPENSES,
        value: 2000,
        category: 22,
        description: "Credit Card",
        date: "10-07-2020",
      },
      {
        id: 413,
        type: categoriesTypes.EXPENSES,
        value: 1530,
        category: 22,
        description: "Credit Card",
        date: "20-07-2020",
      },
    ],
  },
  {
    id: 112,
    name: "my Second Balance",
    initialBalance: 3000,
    categories: [
      {
        id: 21,
        name: "General Expenses",
        color: "#d44949",
      },
      {
        id: 22,
        name: "Credit Card",
        color: "#efb926",
      },
      {
        id: 23,
        name: "Income",
        color: "#6fb157",
      },
    ],
    users: [
      {
        id: 0,
        permission: permissionTypes.ADMIN,
      },
      {
        id: 1,
        permission: permissionTypes.USER,
      },
    ],
    inputs: [
      {
        id: 411,
        type: categoriesTypes.INCOME,
        value: 45200,
        category: 23,
        description: "Salary",
        date: "01-07-2020",
      },
      {
        id: 412,
        type: categoriesTypes.EXPENSES,
        value: 20000,
        category: 22,
        description: "Expenses",
        date: "10-07-2020",
      },
      {
        id: 413,
        type: categoriesTypes.EXPENSES,
        value: 13530,
        category: 22,
        description: "Credit Card",
        date: "20-07-2020",
      },
    ],
  },
];
