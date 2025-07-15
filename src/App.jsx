import { RouterProvider } from "react-router-dom";
import router from "@/routes"; // or './routes' if not using alias
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  return <RouterProvider router={router} />;
}
