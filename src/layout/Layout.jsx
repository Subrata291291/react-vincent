import Topbar from "../components/Topbar";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <Topbar />
      <Header />

      {/* Dynamic Page Content */}
      <Outlet />

      <Footer />
    </>
  );
}

export default Layout;