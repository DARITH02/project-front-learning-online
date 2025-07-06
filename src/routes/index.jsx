import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import CourseView from "../pages/CousreView";
import Categroy from "../pages/Category";
// import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "view-course/:id", element: <CourseView /> },
      { path: "category", element: <Categroy /> },
      //   { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
