import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import App from "./routes/root";
import Experience from "./routes/experience";
import About from "./routes/about";
import Dashboard from "./routes/dashboard";

const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        index: true,
        element: <Navigate to="/about" replace />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
      {
        path: "about",
        element: <About />,
      },
      { path: "dashboard", element: <Dashboard /> },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
