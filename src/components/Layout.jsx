import { Outlet } from "react-router-dom";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { useModal } from "../components/context/ModalContext";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../components/ui/dialog";
import Rigistation from "../pages/Rigistation"; 

const Layout = () => {
  const { isRegisterOpen, closeRegister } = useModal();

  return (
    <div className="w-full">
      <ScrollToTop />
      <Header />
      <div className="">
        <Outlet />
      </div>
      <Footer />

      {/* Global Modal */}
      <Dialog open={isRegisterOpen} onOpenChange={closeRegister}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">Create an Account</DialogTitle>
          </DialogHeader>
          <Rigistation closeModal={closeRegister} />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Layout;
