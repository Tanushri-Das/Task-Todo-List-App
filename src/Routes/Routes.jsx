import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
// import AllTasks from "../Pages/AllTasks/AllTasks";

const routes=createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:"/",
                element:<Home/>
            },
            // {
            //     path:"/alltasks",
            //     element:<AllTasks/>
            // }
        ]
    }
])
export default routes;