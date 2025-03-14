import NavbarLayout from "@/components/layout";
import Home from "@/pages/home";
import { RouteObject, useRoutes } from "react-router-dom";

export const Routes = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <NavbarLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
  ];

  return useRoutes(routes);
};
