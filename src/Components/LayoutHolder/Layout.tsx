import { Outlet } from "react-router-dom";
import Header from "../Static/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
