import { RouterProvider, createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/PortfolioPage";

const Routes: React.FC = () => {

  const publicRoutes: RouteObject[] = [
    {
      path: "/",
      element: <Home/>,
    },
  ];

  // Combine and conditionally include routes based on authentication status
  const router = createBrowserRouter([
    ...publicRoutes,
  ]);

  // Provide the router configuration using RouterProvider
  return <RouterProvider router={router} />;
};

export default Routes;
