import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import router from "./Components/Router/router";
import AuthProvider from "./Components/AuthProvider/AuthProvider";
import { Toaster } from "react-hot-toast";
import { HelmetProvider } from "react-helmet-async";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
   <HelmetProvider>
   <AuthProvider>
   <RouterProvider router={router} />
   <Toaster position='top-right' reverseOrder={false} />
   </AuthProvider>
   </HelmetProvider>
  </React.StrictMode>
);
