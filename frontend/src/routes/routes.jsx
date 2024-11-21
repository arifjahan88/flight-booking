import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { FlightsPage } from "../pages/Flights";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/flights",
      element: <FlightsPage />,
    },
  ],
  {
    future: {
      v7_normalizeFormMethod: true,
      v7_relativeSplatPath: true,
      v7_startTransition: true,
      v7_fetcherPersist: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  }
);
