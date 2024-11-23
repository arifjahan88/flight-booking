import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import { FlightsPage } from "../pages/Flights";
import FlightDetails from "../components/Flights/FlightsDetails/FlightDetails";
import Main from "../layout/Layout";
import Login from "../pages/Authentication/Login";
import Register from "../pages/Authentication/Register";
import UserBookings from "../pages/UserBookings";
import Dashboard from "../pages/Dashboard/Dashboard";
import DashboardLayout from "../layout/DashboardLayout";
import AllBookings from "../pages/Dashboard/AllBookings";
import AllFlights from "../pages/Dashboard/AllFlights";
import PrivateRoute from "./PrivateRoutes";
import AdminRoute from "./AdminRoute";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/flights",
          element: <FlightsPage />,
        },
        {
          path: "/flights/flight-details",
          element: (
            <PrivateRoute>
              <FlightDetails />
            </PrivateRoute>
          ),
        },
        {
          path: "/user-bookings",
          element: (
            <PrivateRoute>
              <UserBookings />
            </PrivateRoute>
          ),
        },
      ],
    },
    {
      path: "/dashboard",
      element: (
        <AdminRoute>
          <DashboardLayout />
        </AdminRoute>
      ),
      children: [
        {
          path: "/dashboard",
          element: <Dashboard />,
        },
        {
          path: "/dashboard/all-bookings",
          element: <AllBookings />,
        },

        {
          path: "/dashboard/all-flights",
          element: <AllFlights />,
        },
      ],
    },

    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
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
