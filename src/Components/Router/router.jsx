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
import UpdatePage from "../Page/UpdatePage";
import ErrorPage from "../Page/ErrorPage";
import Contact from "../Contact/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
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
        },
        {
            path:'/updateData/:id',
            element: <PrivateRouter><UpdatePage></UpdatePage></PrivateRouter>,
        },
        {
            path:'/contact',
            element:<Contact></Contact>
        }
    ]
    },
  ]);

export default router;