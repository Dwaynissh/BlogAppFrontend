import { createBrowserRouter } from "react-router-dom";
import HomeScreen from "../Dashboard/HomeScreen";
import BookMark from "../Dashboard/BookMark";
import Fiction from "../Dashboard/Fiction";
import Adventure from "../Dashboard/Adventure";
import Nonfiction from "../Dashboard/Nonfiction";
import Religious from "../Dashboard/Religious";
import Settings from "../Dashboard/Settings";
import CreateBlog from "../Dashboard/CreateBlog";
import DashLayout from "../Dashboard/Static/DashLayout";
// import DataDetail from "../Dashboard/DetailsPage/DataDetail";
// import DetailPage from "../Pages/DetailsPage/DetailPage";
// import Layout from "../Components/LayoutHolder/Layout";
// import Hero from "../Pages/Hero";
import Liked from "../Dashboard/Liked";
import Login from "../Auth/Login";
import Register from "../Auth/Register";
import DetailPage from "../Dashboard/DetailsPage/DetailPage";
import Verify from "../Auth/Verify";
import WelcomeAlert from "../Auth/WelcomeAlert";
import FirsttimeScreen from "../Auth/FirstTime/FirsttimeScreen";
import PrivateRouter from "./PrivateRouter";

export const MainRouter = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        element: (
          <PrivateRouter>
            <DashLayout />
          </PrivateRouter>
        ),
        children: [
          {
            index: true,
            element: <HomeScreen />,
          },
          {
            path: "/dashboard/publish",
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
    ],
  },
]);
