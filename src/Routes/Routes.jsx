import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTasks from "../Pages/AllTasks/AllTasks";
import About from "../Pages/About/About";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/alltasks",
        element: <AllTasks />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);
export default routes;
