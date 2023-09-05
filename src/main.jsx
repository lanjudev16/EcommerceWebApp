import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import { router } from './Routes/Route';
import MyCartProvider from './Provider/MyCartProvider';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <MyCartProvider>
      <RouterProvider router={router} />
    </MyCartProvider>
  </React.StrictMode>
)
