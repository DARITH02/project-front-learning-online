import { Outlet } from "react-router-dom";
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";

const Layout = () => {
    return (
        <div className="w-full">
            <Header />
            <div className="">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Layout;
