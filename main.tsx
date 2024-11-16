import * as React from "react";
import * as ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import MSABrowser from "./pages/MSABrowser";
import MSAdata from "./pages/MSAdata";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <MSABrowser />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/table",
        // Tutaj kod Tabeli sekwencyjnech
        element: <MSAdata />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
