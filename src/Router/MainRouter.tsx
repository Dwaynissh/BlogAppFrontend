// import React, { Suspense } from "react";
// import { createBrowserRouter } from "react-router-dom";
// import Layout from "../Components/LayoutHolder/Layout";
// import Hero from "../Pages/Hero";
// import PrivateRouter from "./PrivateRouter";
// import DetailPage from "../Dashboard/DetailsPage/DetailPage";
// import RouteChecker from "./RouteChecker";

// const LoadingScreen = React.lazy(
//   () => import("../Components/Props/LoadingScreen")
// );
// // Dashboard Nested Routes
// const CreateBlog = React.lazy(() => import("../Dashboard/CreateBlog"));
// const HomeScreen = React.lazy(() => import("../Dashboard/HomeScreen"));
// const Fiction = React.lazy(() => import("../Dashboard/Fiction"));
// const Nonfiction = React.lazy(() => import("../Dashboard/Nonfiction"));
// const Adventure = React.lazy(() => import("../Dashboard/Adventure"));
// const Religious = React.lazy(() => import("../Dashboard/Religious"));
// const BookMark = React.lazy(() => import("../Dashboard/BookMark"));
// const Liked = React.lazy(() => import("../Dashboard/Liked"));
// const Settings = React.lazy(() => import("../Dashboard/Settings"));

// // Auth Routes
// const Login = React.lazy(() => import("../Auth/Login"));
// const Register = React.lazy(() => import("../Auth/Register"));
// const Verify = React.lazy(() => import("../Auth/Verify"));
// const WelcomeAlert = React.lazy(() => import("../Auth/WelcomeAlert"));
// const FirsttimeScreen = React.lazy(
//   () => import("../Auth/FirstTime/FirsttimeScreen")
// );

// export const MainRouter = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         index: true,
//         element: <Hero />,
//       },
//     ],
//   },
//   {
//     path: "/dashboard",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <PrivateRouter>
//           <RouteChecker />
//         </PrivateRouter>
//       </Suspense>
//     ),
//     children: [
//       {
//         index: true,
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <HomeScreen />
//           </Suspense>
//         ),
//       },
//       {
//         path: "publish",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <CreateBlog />,
//           </Suspense>
//         ),
//       },
//       {
//         path: "adventure",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Adventure />,
//           </Suspense>
//         ),
//       },
//       {
//         path: "fiction",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Fiction />,
//           </Suspense>
//         ),
//       },
//       {
//         path: "nonfiction",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Nonfiction />,
//           </Suspense>
//         ),
//       },
//       {
//         path: "religious",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Religious />,
//           </Suspense>
//         ),
//       },
//       {
//         path: "bookmark",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <BookMark />
//           </Suspense>
//         ),
//       },
//       {
//         path: "liked",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Liked />
//           </Suspense>
//         ),
//       },
//       {
//         path: "settings",
//         element: (
//           <Suspense fallback={<LoadingScreen />}>
//             <Settings />,
//           </Suspense>
//         ),
//       },
//       {
//         path: ":ID",
//         element: <DetailPage />,
//       },
//     ],
//   },
//   {
//     path: "/login",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <Login />,
//       </Suspense>
//     ),
//   },
//   {
//     path: "/register",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <Register />,
//       </Suspense>
//     ),
//   },
//   {
//     path: "/verify",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <Verify />,
//       </Suspense>
//     ),
//   },
//   {
//     path: "/welcome",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <WelcomeAlert />,
//       </Suspense>
//     ),
//   },
//   {
//     path: "/first-time",
//     element: (
//       <Suspense fallback={<LoadingScreen />}>
//         <FirsttimeScreen />
//       </Suspense>
//     ),
//   },
// ]);

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
