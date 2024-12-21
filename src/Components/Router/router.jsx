import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root";
import Home from "../Path/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AllArtifacts from "../Path/AllArtifacts";
import AddArtifacts from "../Path/AddArtifacts";
import PrivateRouter from "../PrivatedRouter/PrivateRouter";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
        path:'/',
        element: <Home></Home>
        },
        {
            path:'/login',
            element:<Login></Login>
        },
        {
            path:'/register',
            element:<Register></Register>
        },
        {
            path:'/allArtifacts',
            element: <PrivateRouter><AllArtifacts></AllArtifacts></PrivateRouter>
        },
        {
            path:'/AddArtifacts',
            element: <PrivateRouter><AddArtifacts></AddArtifacts></PrivateRouter>
        }
    ]
    },
  ]);

export default router;