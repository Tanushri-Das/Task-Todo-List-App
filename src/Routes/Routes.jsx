import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import AllTasks from "../Pages/TaskList/TaskList";
import Taskform from "../Pages/Taskform/Taskform";

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
        path: "/taskform",
        element: <Taskform />,
      },
      {
        path: "/alltasks",
        element: <AllTasks />,
      }
    ],
  },
]);
export default routes;
