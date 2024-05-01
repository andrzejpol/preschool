import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/ErrorPage";
import {ChakraProvider} from "@chakra-ui/react";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Dashboard";
import Attendance from "./pages/Attendance";

const router = createBrowserRouter([
  {
    path:"/",
    element: <Dashboard/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/attendance",
    element: <Attendance/>,
    errorElement: <ErrorPage/>
  },
  {
    path: "/root",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"contacts/:contactId",
        element:<p>Hello</p>
      },
    ]
  },
  {
    path:"/login",
    element: <LoginPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/register",
    element: <RegisterPage/>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/logout",
    element: <p>Logout page</p>
  },
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router}/>
    </ChakraProvider>
  </React.StrictMode>
);


