import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import CourseView from "../pages/CousreView";
import Categroy from "../pages/Category";
import NotFound from "../components/NotFound";
import Rigistation from "../pages/Rigistation";
// import NotFound from "@/pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "view-course/:id", element: <CourseView /> },
      {
        path: "category/:id",
        element: <Categroy />,
      },
      {
        path: "category/:id/view-course/:id",
        element: <CourseView />,
      },
      {
        path: "/rigistration",
        element: <Rigistation />,
      },
      // {

      //   children: [{ path: "view-course/:id", element: <CourseView /> }],
      // },

      { path: "about", element: <About /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);

export default router;
