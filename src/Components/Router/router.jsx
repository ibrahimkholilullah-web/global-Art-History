import { createBrowserRouter } from "react-router-dom";
import Root from "../Main/Root";
import Home from "../Path/Home";
import Login from "../Page/Login";
import Register from "../Page/Register";
import AllArtifacts from "../Path/AllArtifacts";
import AddArtifacts from "../Path/AddArtifacts";
import PrivateRouter from "../PrivatedRouter/PrivateRouter";
import ViewDitails from "../Page/ViewDitails";
import LikedArtifacts from "../Path/LikedArtifacts";
import MyArtifactsPage from "../Path/MyArtifactsPage";

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
            element: <PrivateRouter><AllArtifacts></AllArtifacts></PrivateRouter>,
            loader: () => fetch(`${import.meta.env.VITE_APP_URL}/artifact`)
        },
        {
            path:'/AddArtifacts',
            element: <PrivateRouter><AddArtifacts></AddArtifacts></PrivateRouter>
        },
        {
            path:'/viewDitails/:id',
            element: <PrivateRouter><ViewDitails></ViewDitails></PrivateRouter>,
        },
        {
            path:'/likedArtifacts',
            element: <PrivateRouter><LikedArtifacts></LikedArtifacts></PrivateRouter>
        },
        {
            path: "/myartifactpage",
            element: <PrivateRouter><MyArtifactsPage></MyArtifactsPage></PrivateRouter>
        }
    ]
    },
  ]);

export default router;