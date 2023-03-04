import React from "react";
import { useRoutes } from "react-router-dom";
import Login from "./Login/Login";
import Create from "./Create/Create";
import Homescreen from "./Homescreen/Homescreen";
import Home from "./DashBoard/Homes";
import Dashboard from "./DashBoard/Dashboard";
import Save from "./DashBoard/Save";
import Savings from "./SavingsDashboard/Savings";
import SavingsDashboard from "./SavingsDashboard/SavingsDashboard";
import Piggybank from "./SavingsDashboard/Piggybank";
import Flex from "./SavingsDashboard/Flex";
import Safelock from "./SavingsDashboard/Safelock";
import Target from "./SavingsDashboard/Target";

const Allroutes = () => {
  let element = useRoutes([
    {
      path: "/",
      element: <Homescreen />,
    },
    {
      path: "/create",
      element: <Create />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/dashboard",
      element: <Dashboard />,
    },
    {
      path: "/savings",
      children: [
        {
          index: true,
          element: <SavingsDashboard />,
        },
        {
          path: "/savings/piggybank",
          element: <Piggybank />,
        },
        {
          path: "/savings/flex",
          element: <Flex />,
        },
        {
          path: "/savings/safelock",
          element: <Safelock />,
        },
        {
          path: "/savings/target",
          element: <Target />,
        },
      ],
    },
  ]);
  return element;
};

export default Allroutes;
