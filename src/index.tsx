import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage />,
    children:[
      {
        path:"contacts/:contactId",
        element:<p>Hello</p>
      }
    ]
  },
  {
    path:"/login",
    element: <p>Login page</p>,
    errorElement: <ErrorPage/>
  },
  {
    path:"/register",
    element: <p>Register page</p>
  },
  {
    path:"/logout",
    element: <p>Logout page</p>
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);


