import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ScrollToTop from "../components/ScrollToTop";
const Layout = () => {
  return (
    <div className="w-full">
      <ScrollToTop />

      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
