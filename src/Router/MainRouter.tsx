import { createBrowserRouter } from "react-router-dom";
import Layout from "../Components/LayoutHolder/Layout";
import Hero from "../Pages/Hero";
import PrivateRouter from "./PrivateRouter";
import HomeScreen from "../Dashboard/HomeScreen";
import Adventure from "../Dashboard/Adventure";
import Fiction from "../Dashboard/Fiction";
import Nonfiction from "../Dashboard/Nonfiction";
import Religious from "../Dashboard/Religious";
import BookMark from "../Dashboard/BookMark";
import Liked from "../Dashboard/Liked";
import Settings from "../Dashboard/Settings";
import DetailPage from "../Dashboard/DetailsPage/DetailPage";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import Verify from "../Auth/Verify";
import WelcomeAlert from "../Auth/WelcomeAlert";
import FirsttimeScreen from "../Auth/FirstTime/FirsttimeScreen";
import CreateBlog from "../Dashboard/CreateBlog";
import RouteChecker from "./RouteChecker";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Hero />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRouter>
        <RouteChecker />
      </PrivateRouter>
    ),
    children: [
      {
        index: true,
        element: <HomeScreen />,
      },
      {
        path: "publish",
        element: <CreateBlog />,
      },
      {
        path: "adventure",
        element: <Adventure />,
      },
      {
        path: "fiction",
        element: <Fiction />,
      },
      {
        path: "nonfiction",
        element: <Nonfiction />,
      },
      {
        path: "religious",
        element: <Religious />,
      },
      {
        path: "bookmark",
        element: <BookMark />,
      },
      {
        path: "liked",
        element: <Liked />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: ":ID",
        element: <DetailPage />,
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
  {
    path: "/verify",
    element: <Verify />,
  },
  {
    path: "/welcome",
    element: <WelcomeAlert />,
  },
  {
    path: "/first-time",
    element: <FirsttimeScreen />,
  },
]);
